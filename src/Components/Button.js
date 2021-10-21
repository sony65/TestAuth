import React from 'react';
import classes from './Button.module.css';

const Button = ({onClick, text, type, disabled}) => {
    return (
        <button 
            className={classes.Button}
            onClick={onClick}
            type={type}
            disabled={disabled}
        >
            {text}
        </button>
    );
}

export default Button;