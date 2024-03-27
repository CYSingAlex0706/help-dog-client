import React, { memo } from 'react'
import { Switch } from 'antd'

import Comment from './components/comment'
import './style.css'

const dogImg = 'https://t11.baidu.com/it/u=3461840128,183763213&fm=30&app=106&f=JPEG?w=640&h=964&s=0FABFF0744211505C0A5BD6803003041'

const detailList = [
    {
        label: 'name',
        value: 'name'
    },
    {
        label: 'age',
        value: 'age'
    },
    {
        label: 'gender',
        value: 'gender'
    },
    {
        label: 'breed',
        value: 'breed'
    },
    {
        label: 'charity worker',
        value: 'worker'
    },
    {
        label: 'favorite',
        value: 'favorite'
    },
]

const Detail = memo(() => {
    const onChange = (checked: boolean) => {
        console.log(`switch to ${checked}`);
    };
    return (
        <div className='detail-outer'>
            <div className='detail-main'>
                <div className='dog-detail-wrap p-20 br-8'>
                    <img className='dog-img' src={dogImg} alt="" />
                    <div className='d-right-area'>
                        {
                            detailList.map(item => {
                                return <div className='d-info-item' key={item.value}>
                                    <span className='item-title'>{item.label}:</span>
                                    {
                                        item.value === 'favorite' ? <Switch defaultChecked onChange={onChange} /> : <span className='item-value'>{item.value}</span>
                                    }

                                </div>
                            })
                        }

                    </div>
                </div>
                <div className='comment-outer-wrap p-20 br-8 bg-white'>
                    <Comment />
                </div>
            </div>
        </div>
    )
})

export default Detail