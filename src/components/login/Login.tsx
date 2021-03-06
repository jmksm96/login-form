import {Button, FormControl, FormGroup, LinearProgress, TextField} from '@material-ui/core';
import {useFormik} from 'formik';
import React from 'react';
import style from './login.module.scss'
import Typography from '@material-ui/core/Typography';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import {Credentials, logInTC} from '../../redux/auth-reducer/auth-reducer';
import {getAuth} from '../../redux/auth-reducer/auth-selector';

const Login = () => {

    const dispatch = useDispatch()
    const {isSubmitting, error} = useSelector(getAuth, shallowEqual);
    const formik = useFormik({

        validate: (values) => {
            const errors: Partial<Credentials> = {};
            if (!values.email) {
                errors.email = 'Required email';
            } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
            ) {
                errors.email = 'Invalid email address';
            }
            if (!values.password) {
                errors.password = 'Required password'
            }
            return errors;
        },
        initialValues: {
            email: 'user@ozitag.com',
            password: 'user',
        },
        onSubmit: values => {
            dispatch(logInTC(values.email, values.password))
        },
    })

    return (
        <div className={style.container}>
            {error && <p className={style.error}>{error.message}</p>}
            <Typography variant="h3" component="h2" gutterBottom>
                Log in
            </Typography>
            <form onSubmit={formik.handleSubmit}>
                <FormControl>
                    <FormGroup>
                        <TextField
                            type="email"
                            label="Email"
                            margin="normal"
                            {...formik.getFieldProps('email')}
                        />
                        {formik.errors.email ? <div className={style.error}>{formik.errors.email}</div> : null}
                        <TextField
                            type="password"
                            label="Password"
                            margin="normal"
                            {...formik.getFieldProps('password')}
                        />
                        {formik.errors.password ? <div className={style.error}>{formik.errors.password}</div> : null}
                        {isSubmitting && <LinearProgress/>}
                    </FormGroup>
                    <Button variant="contained"
                            color="primary"
                            type="submit"
                            disabled={isSubmitting}>
                        Submit
                    </Button>

                </FormControl>

            </form>
        </div>
    );
};

export default Login;