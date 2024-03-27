// import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { Input, Button, Flex } from 'antd';

import './style.css'
import defaultAvatar from '@/assets/image/icon/default_avatar.webp'
import CommentItem from './components/comment-item';

const { TextArea } = Input;

const Comment = memo((props) => {
    return (
        <div className='comment-outer'>
            <h3 className='comment-main-title'>Comment</h3>
            <div className='top-wrap'>
                <div className='user-avatar-wrap'>
                    <img className='user-avatar' src={defaultAvatar} alt="" />
                    <span>user</span>
                </div>
                <div className='textarea-wrap'>
                    <TextArea value={'reply'} rows={4} placeholder="please input" maxLength={300} />
                </div>
                <Flex justify='flex-end'>
                    <Button type="primary">Send</Button>
                </Flex>
            </div>
            <div className='item-list'>
                <CommentItem />
            </div>
        </div>
    )
})

// Comment.propTypes = {}

export default Comment