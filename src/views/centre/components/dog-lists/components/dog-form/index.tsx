import React, { memo } from 'react'
import { Button, Form, Input, Select, Upload } from 'antd';
import { PlusOutlined } from '@ant-design/icons';


const DogForm = memo(() => {
    const [form] = Form.useForm();

    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
    };

    const normFile = (e: any) => {
        if (Array.isArray(e)) {
            return e;
        }
        return e?.fileList;
    };

    return (
        <div>
            <Form
                layout='horizontal'
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 16 }}
                form={form}
            >

                <Form.Item label="name">
                    <Input placeholder="input placeholder" />
                </Form.Item>
                <Form.Item label="age">
                    <Input placeholder="input placeholder" />
                </Form.Item>
                <Form.Item label="breed">
                    <Input placeholder="input placeholder" />
                </Form.Item>
                <Form.Item label="gender" name="layout">
                    <Select
                        defaultValue="lucy"
                        style={{ width: 120 }}
                        onChange={handleChange}
                        options={[
                            { value: 'jack', label: 'Jack' },
                            { value: 'lucy', label: 'Lucy' },
                        ]}
                    />
                </Form.Item>
                <Form.Item label="Upload" valuePropName="fileList" getValueFromEvent={normFile}>
                    <Upload action="/upload.do" listType="picture-card">
                        <button style={{ border: 0, background: 'none' }} type="button">
                            <PlusOutlined />
                            <div style={{ marginTop: 8 }}>Upload</div>
                        </button>
                    </Upload>
                </Form.Item>
            </Form>
        </div>
    )
})

export default DogForm