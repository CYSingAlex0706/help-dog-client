import React, { memo } from 'react'
import { Button, Checkbox, Form, type FormProps, Input } from 'antd';

import './style.css'
import useRouterNavigate from '../../hooks/useRouterNavigate';
import { loginApi } from '@/apis/sys';
import { ILoginParams } from '@/types/userType';
import { StatusCode } from '@/constance/statusCode';
import { useAppDispatch } from '@/hooks/useRedux';
import { setUserInfo } from '@/store/module/userReducer';

type FieldType = {
    account?: string;
    password?: string;
    remember?: string;
};

const Login = memo(() => {
    const dispatch = useAppDispatch()
    const navigate = useRouterNavigate()

    const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
        console.log('Success:', values);
        let params: ILoginParams = values as ILoginParams
        loginApi(params).then((res): void => {
            console.log('res', res);
            if (res.code === StatusCode.SUCCESS) {
                // const {token,userInfo} = res.data
                const token = res.data?.token
                const userInfo = res.data?.userInfo
                dispatch(setUserInfo(userInfo))
                localStorage.setItem('token', token!)
                navigate('/')
            }
        })
    };

    const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };


    return (
        <div className='login-main'>
            {/* <h3 className='l-title'>Welcome to the help dog</h3> */}
            <h3 className='l-title'>Sign in to help dog</h3>
            <div className='login-form-wrap'>
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ offset: 4, span: 16 }}
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

                    {/* <Form.Item<FieldType>
                        name="remember"
                        valuePropName="checked"
                        wrapperCol={{ offset: 8, span: 16 }}
                    >
                        <Checkbox>Remember me</Checkbox>
                    </Form.Item> */}

                    <Form.Item >
                        <Button className='sign-in' type="primary" htmlType="submit">
                            Sign in
                        </Button>
                        <Button onClick={() => navigate('/register')}>
                            Sign up
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
})

export default Login