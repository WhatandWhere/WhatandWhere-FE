// DynamicForm.jsx
import React, {useState} from 'react';
import LoginRegisterButton from "./LoginRegisterButton";
import './design-files-css/DynamicForm.css';

const DynamicForm = ({formData, name}) => {
    const [formValues, setFormValues] = useState({});

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormValues({...formValues, [name]: value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission or any other desired action
        console.log(formValues);
    };

    return (
        <form onSubmit={handleSubmit}>
            {formData.map((field, index) => (
                <div className="form-group" key={index}>
                    <input
                        type={field.type}
                        name={field.name}
                        className="form-input"
                        placeholder={field.placeholder}
                        value={formValues[field.name] || ''}
                        onChange={handleInputChange}
                    />
                </div>
            ))}
            <LoginRegisterButton label={name}/>
        </form>
    );
};

export default DynamicForm;
