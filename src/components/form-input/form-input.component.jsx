import React from 'react';

import './form-input.styles.css';

const FormInput = ({name, type, placeholder}) => {
    return (
        <div className="form-input">
            <input type={name} placeholder={placeholder} />
        </div>
    )
}

export default FormInput;