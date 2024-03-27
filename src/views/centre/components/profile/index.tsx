import React, { memo } from 'react'
import { shallowEqual } from 'react-redux';
import { Button, Form, Input, Select, Upload, Col, Row, message } from 'antd';
// import { PlusOutlined } from '@ant-design/icons';

import './style.css'
import { GENDER_LIST, GENDER } from '@/constance/common';
import { useAppSelectore } from '@/hooks/useRedux';
import { updateUserApi } from '@/apis/user';
import { StatusCode } from '@/constance/statusCode';

const Profile = memo(() => {

    const userInfor = useAppSelectore(state => state.user.userInfo, shallowEqual)

    const [form] = Form.useForm();
    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
    };

    const onFinish = (values: any) => {
        console.log('values', values);
        let params = values
        updateUserApi(params).then(res => {
            if (res.code === StatusCode.SUCCESS) {
                message.success('update info success.')
            }
        })
    }

    // const normFile = (e: any) => {
    //     if (Array.isArray(e)) {
    //         return e;
    //     }
    //     return e?.fileList;
    // };

    return (
        <div className='profile-main'>
            <div>
                <Form
                    layout='horizontal'
                    labelCol={{ span: 4 }}
                    wrapperCol={{ span: 16 }}
                    form={form}
                    onFinish={onFinish}
                >
                    <Row className='form-row' gutter={4}>
                        {/* <Col span={1} offset={2}>
                            <Form.Item label="" valuePropName="fileList" getValueFromEvent={normFile}>
                                <Upload action="/upload.do" listType="picture-circle">
                                    <button style={{ border: 0, background: 'none' }} type="button">
                                        <PlusOutlined />
                                        <div style={{ marginTop: 8 }}>Upload</div>
                                    </button>
                                </Upload>
                            </Form.Item>
                        </Col> */}
                        <Col span={8} offset={1}>
                            <Form.Item label="name" name='name' initialValue={userInfor.name}>
                                <Input placeholder="input placeholder" />
                            </Form.Item>
                            <Form.Item label="age" name='age' initialValue={userInfor.age}>
                                <Input placeholder="input placeholder" />
                            </Form.Item>
                            {/* <Form.Item label="breed">
                                <Input placeholder="input placeholder" />
                            </Form.Item> */}
                            <Form.Item label="gender" name="gender" initialValue={userInfor.gender || GENDER.MALE}>
                                <Select
                                    style={{ width: 120 }}
                                    onChange={handleChange}
                                    options={GENDER_LIST}
                                />
                            </Form.Item>
                            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                                <Button type='primary' htmlType="submit">Submit</Button>
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </div>
        </div>
    )
})

export default Profile