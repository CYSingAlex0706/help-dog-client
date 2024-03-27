import React, { memo, useState } from 'react'
import { Button } from 'antd'

import './style.css'
import { getSignUpCodeApi } from '@/apis/sys'
import { StatusCode } from '@/constance/statusCode'

const Code = memo(() => {
    const [code, setCode] = useState('')

    const getCode = () => {
        getSignUpCodeApi().then(res => {
            console.log('res', res);

            if (res.code === StatusCode.SUCCESS) {
                setCode(res.data!.code)
            }
        })
    }
    return (
        <div className='code-main'>
            <Button type='primary' onClick={() => getCode()}>generate</Button>
            <div className='code-wrap'>
                <span className='code-title'>sign up code: </span>
                <span className='code'>{code}</span>
            </div>
        </div>
    )
})

export default Code