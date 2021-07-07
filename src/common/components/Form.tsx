import React from 'react';
import {Form, Input} from 'antd';

export const Email = () => {
    return (

        <Form
            name="basic"
            labelCol={{span: 8}}
            wrapperCol={{span: 16}}
            initialValues={{remember: true}}>
            <Form.Item
                label="Email"
                initialValue='user@ozitag.com'
                name="email"
                rules={[{required: true, message: 'Please input your username!'}]}>
                <Input/>
            </Form.Item>

        </Form>
    );
};




export const Password = () => {
    return (
        <div>
            <Form
                name="basic"
                labelCol={{span: 8}}
                wrapperCol={{span: 16}}
                initialValues={{remember: true}}>

                <Form.Item
                    label="Password"
                    name="password"
                    initialValue='user'
                    rules={[{required: true, message: 'Please input your password!'}]}
                >
                    <Input.Password/>
                </Form.Item>

            </Form>
        </div>
    );
};


