import React from 'react';
import 'antd/dist/antd.css'
import {getAuth} from '../../redux/auth-reducer/auth-selector';
import {Formik} from 'formik';
import {Credentials, logInTC} from '../../redux/auth-reducer/auth-reducer';
import {Button, Form, Input} from 'antd';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import style from './login.module.css'
import {Typography} from 'antd';

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
                        <Form.Item
                            label="Username"
                            name="username"
                            initialValue="user@ozitag.com"
                            rules={[{required: true, message: 'Please input your username!'}]}
                            labelCol={{span: 8}}
                            wrapperCol={{span: 16}}
                        >
                            <Input/>
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            initialValue="user"
                            name="password"
                            rules={[{required: true, message: 'Please input your password!'}]}
                            labelCol={{span: 8}}
                            wrapperCol={{span: 16}}
                        >
                            <Input.Password/>
                        </Form.Item>
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

