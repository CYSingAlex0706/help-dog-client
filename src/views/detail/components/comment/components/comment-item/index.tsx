import React, { memo } from 'react'
import { Button } from 'antd'

import defaultAvatar from '@/assets/image/icon/default_avatar.webp'
import './style.css'

const CommentItem = memo(() => {
    return (
        <div className='comment-item-wrap'>
            <img className='avatar' src={defaultAvatar} alt="" />
            <div className='middle-wrap'>
                <div className='item-name'>andy</div>
                <p>hellow,my friend</p>
                <span className='item-time'>January 2024</span>
            </div>
            <div className='btn-wrap'>
                <Button className='reply-btn'>replay</Button>
                <Button>delete</Button>
            </div>
        </div>
    )
})

export default CommentItem