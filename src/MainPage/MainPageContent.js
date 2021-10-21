import React from "react";
import classes from './MainPageContent.module.css';
import Input from "../Components/Input";

const MainPageContent = ({values, handleChange}) => {
    return (
        <div className={classes.MainPageContent}>
            <Input
                id='login'
                name='login'
                type='text'
                labelText='Логин:'
                placeholder='Введите свой логин'
                value={values.login}
                onChange={handleChange}
            />
            <Input
                id='password'
                name='password'
                type='password'
                labelText='Пароль:'
                placeholder='Введите свой пароль'
                value={values.password}
                onChange={handleChange}
            />
        </div>
    );
};

export default MainPageContent;