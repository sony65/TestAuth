import React from "react";
import classes from './Input.module.css';

const Input = ({value, type, id, name, placeholder, labelText, onChange}) => {
    return (
        <div className={classes.Container}>
            <label 
                className={classes.Label}
                htmlFor={id}
            >
                {labelText}
            </label>
            <input 
                className={classes.Input}
                type={type}
                value={value}
                id={id}
                name={name}
                placeholder={placeholder}
                onChange={onChange}
            ></input>
        </div>
    );
};

export default Input;