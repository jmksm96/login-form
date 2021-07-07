import React from 'react';
import 'antd/dist/antd.css'
import {getAuth} from '../../redux/auth-reducer/auth-selector';
import {Field, Form, Formik} from 'formik';
import {Credentials, logInTC} from '../../redux/auth-reducer/auth-reducer';
import {Button, Typography} from 'antd';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import style from './login.module.scss'
import {Email, Password} from '../../common/components/Form';



const Login = () => {
    const {Title} = Typography;
    const dispatch = useDispatch()
    const {isSubmitting, error} = useSelector(getAuth, shallowEqual)

    return (
        <div className={style.container}>
            {error && <p className="error">{error.message}</p>}
            <Formik
                initialValues={{
                    email: 'user@ozitag.com',
                    password: 'user',
                }}
                validate={(values) => {
                    const errors: Partial<Credentials> = {};
                    if (!values.email) {
                        errors.email = 'Required';
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
                    ) {
                        errors.email = 'Invalid email address';
                    }
                    return errors;
                }}
                onSubmit={async (values) => {
                    dispatch(logInTC(values.email, values.password));
                }}
            >
                {({submitForm}) => (
                    <Form className={style.form}>
                        <Title level={3}>Log in</Title>
                        <Field
                            component={Email}
                            name="email"
                            type="email"
                            label="Email"
                            variant="outlined"
                        />
                        <Field
                            component={Password}
                            type="password"
                            label="Password"
                            name="password"
                            variant="outlined"
                        />
                        <Button type="primary"
                                htmlType="submit"
                                onClick={submitForm}
                                disabled={isSubmitting}>
                            Submit
                        </Button>
                    </Form>

                )}


            </Formik>
        </div>
    );
};


export default Login;

