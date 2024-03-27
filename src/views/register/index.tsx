import React, { memo } from 'react'
import { Button, Form, type FormProps, Input, Tabs, message } from 'antd';

import './style.css'
import { registerApi } from '@/apis/sys';
import { StatusCode } from '@/constance/statusCode';
import useRouterNavigate from '@/hooks/useRouterNavigate';

type FieldType = {
    account: string;
    password: string;
    code?: string;
};

const Login = memo(() => {
    const navigate = useRouterNavigate()


    const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
        console.log('Success:', values);
        let params = values
        let res = await registerApi(params)
        if (res.code === StatusCode.SUCCESS) {
            message.success('create account success.')
            navigate('/login')
        } else {
            message.error(res.message)
        }
    };

    const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const onChange = (key: string) => {
        console.log(key);
    };

    const tabs = ['member', 'charity worker']

    return (
        <div className='register-main'>
            <h3 className='l-title'>Sign up</h3>
            <Tabs
                onChange={onChange}
                type="card"
                tabBarStyle={{ width: '300px' }}
                items={tabs.map((item, i) => {
                    const id = String(i + 1);
                    return {
                        label: item,
                        key: id,
                        children: <div className='form-wrap'>
                            <Form
                                className='l-form'
                                name={item}
                                wrapperCol={{ span: 24 }}
                                style={{ maxWidth: 600 }}
                                initialValues={{ remember: true }}
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                                autoComplete="off"
                            >
                                <Form.Item<FieldType>
                                    name="account"
                                    rules={[{ required: true, message: 'Please input your account!' }]}
                                >
                                    <Input placeholder='account' />
                                </Form.Item>

                                <Form.Item<FieldType>
                                    name="password"
                                    rules={[{ required: true, message: 'Please input your password!' }]}
                                >
                                    <Input.Password placeholder='password' />
                                </Form.Item>
                                {
                                    item === 'charity worker' && <Form.Item<FieldType>
                                        name="code"
                                        rules={[{ required: false, message: 'Please input your code!' }]}
                                    >
                                        <Input placeholder='code' />
                                    </Form.Item>
                                }
                                <Form.Item >
                                    <Button className='sign-in' type="primary" htmlType="submit">
                                        Sign up
                                    </Button>
                                </Form.Item>
                            </Form>
                        </div>,
                    };
                })}
            />

        </div>
    )
})

export default Login