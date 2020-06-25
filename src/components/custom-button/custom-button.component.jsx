import React from 'react';

import './custom-button.styles.css';


const CustomButton = (props) => {
    return (
        <div className="sign-in-button">
            <button>{props.children}</button>
        </div>
    )
}

export default CustomButton;