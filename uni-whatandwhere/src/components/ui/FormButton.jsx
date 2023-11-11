import React from 'react';
import './FormButton.css';

const FormButton = (props) => {
  return (
    <button className="form-button" type="submit">
      {props.children}
    </button>
  );
};

export default FormButton;