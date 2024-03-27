import React, { memo, useState } from 'react'
import { Button, Form, Input, Select } from 'antd';

import './style.css'

const Filter = memo(() => {
    const [form] = Form.useForm();

    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
    };

    return (
        <div className='filter-wrap'>
            <Form
                layout='inline'
                form={form}
            >

                <Form.Item label="name">
                    <Input placeholder="input placeholder" />
                </Form.Item>
                <Form.Item label="age">
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
                <Form.Item >
                    <Button type="primary">Submit</Button>
                </Form.Item>
            </Form>
        </div>
    )
})

export default Filter