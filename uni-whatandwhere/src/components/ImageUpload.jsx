import React, { useState, useRef } from 'react'; // Corrected import statement
import '../components/design-files-css/ImageUpload.css'; // Import the CSS file

const ImageUpload = ({ onImagesUploaded }) => { // Renamed prop for clarity
    const [files, setFiles] = useState([]);
    const [previewSrc, setPreviewSrc] = useState([]);
    const [isPreviewAvailable, setIsPreviewAvailable] = useState(false);
    const fileInputRef = useRef(null);
  

    const handleImageChange = (event) => {
        // Use 'dataTransfer.files' if files are dropped, else 'target.files' if files are selected via input
        const selectedFiles = event.dataTransfer ? event.dataTransfer.files : event.target.files;
        
        // Calculate the total number of files after addition
        const totalFilesAfterAddition = files.length + selectedFiles.length;
        if (totalFilesAfterAddition > 3) {
          alert('You can only upload up to 3 images.');
          return;
        }

        const newFilesWithPreview = Array.from(selectedFiles).slice(0, 3 - files.length);
    newFilesWithPreview.forEach(file => {
      if (file.size > 2097152) {
        alert('Each file must be 2MB or less.');
      } else {
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreviewSrc(prev => [...prev, reader.result]);
        };
        reader.readAsDataURL(file);
      }
    });

    setFiles(newFilesWithPreview.filter(file => file.size <= 2097152)); // Update state with files <= 2MB
    setIsPreviewAvailable(newFilesWithPreview.some(file => file.size <= 2097152)); // True if at least one file is valid
  };

  const removeImage = (index) => {
    const updatedFiles = files.filter((_, i) => i !== index);
    const updatedPreviews = previewSrc.filter((_, i) => i !== index);
    setFiles(updatedFiles);
    setPreviewSrc(updatedPreviews);
  };
  const onFileInputClick = () => {
    fileInputRef.current.click(); // Programmatically click the file input
  };
  const onDrop = (e) => {
    e.preventDefault();
    handleImageChange(e); // Pass the event to the handler
  };

  return (
    <div className="image-upload-container">
      <div
        className="drop-zone"
        onDragOver={(e) => e.preventDefault()}
        onDrop={(e) => {
          e.preventDefault();
          handleImageChange(e);
        }}
      >
        <div className="drop-zone-content">
          Drag and drop your files here or click to browse
          <button className="upload-button" onClick={onFileInputClick}>
            Upload Images
          </button>
          <input
            ref={fileInputRef}
            type="file"
            name="image"
            onChange={handleImageChange}
            accept="image/*"
            multiple
            style={{ display: 'none' }} // Keep the file input hidden
          />
        </div>
        <div className="preview-container">
          {previewSrc.map((src, index) => (
            <div className="image-preview" key={index}>
              <img src={src} alt={`Preview ${index}`} />
              <button
                className="close-preview"
                onClick={() => removeImage(index)}
              >
                ×
              </button>
            </div>
          ))}
        </div>
        {!isPreviewAvailable && (
          <div className="image-placeholder">
            <p>No preview available</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageUpload;