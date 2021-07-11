import React from 'react';
import {Form, Input} from 'antd';

export const Email = (props: any) => {
    console.log(props);
    return (

        <Form
            name="basic"
            labelCol={{span: 8}}
            wrapperCol={{span: 16}}
            initialValues={{remember: true}}
        >
            <Form.Item
                label="Email"
                // initialValue='user@ozitag.com'
                rules={[{required: true, message: 'Please input your username!'}]}>
                <Input
                    {...props.field}/>
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


