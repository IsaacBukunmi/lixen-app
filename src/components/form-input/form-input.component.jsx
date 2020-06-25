import React from 'react';

import './form-input.styles.css';

const FormInput = ({label, handleChange, ...otherProps}) => {
    return (
        <div className="form-input">
            <input onChange={handleChange} {...otherProps} />
        </div>
    )
}

export default FormInput;