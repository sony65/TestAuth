import React from 'react';
import classes from './MainPage.module.css';
import MainPageContent from './MainPageContent';
import { useFormik } from 'formik';
import Button from '../Components/Button';
import { connect } from 'react-redux';
import { signIn } from '../store/loginSlice';
import { useHistory } from 'react-router';
import { PROFILE_PAGE_URL } from '../routes';

const actionCreator = {
    signIn,
}

const MainPage = ({signIn}) => {
    const history = useHistory();
    const formik = useFormik({
        initialValues: {
            login: '',
            password: '',
        },
        onSubmit: values => {
            signIn(values);
            history.push(PROFILE_PAGE_URL)
        },
    });


    return (
        <form 
            className={classes.MainPage}
            onSubmit={formik.handleSubmit}
        >
            <MainPageContent
                values={formik.values}
                handleChange={formik.handleChange}
            />
            <div>
                <Button
                    disabled={
                        formik.values.login !== 'developer21' ||
                        formik.values.password !== '123456'
                    } 
                    text='Войти'
                    type='submit'
                />
            </div>

        </form>
    );
};

export default connect(null, actionCreator)(MainPage);