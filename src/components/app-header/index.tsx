import React, { memo, useCallback } from 'react'
import type { MenuProps } from 'antd';
import { Dropdown } from 'antd';

import './style.css'
import useRouterNavigate from '../../hooks/useRouterNavigate';
import { shallowEqual } from 'react-redux';
import { useAppDispatch, useAppSelectore } from '@/hooks/useRedux';
import { setUserInfo } from '@/store/module/userReducer';

const AppHeader = memo(() => {
    // get userinfo from store
    const userInfo = useAppSelectore(state => state.user.userInfo, shallowEqual)

    const navigate = useRouterNavigate()

    const dispatch = useAppDispatch()

    const goto = useCallback((url: string) => {
        navigate(url)
    }, [navigate])

    const signOut = () => {
        localStorage.removeItem('token')
        dispatch(setUserInfo({}))
        goto('/')
    }

    const items: MenuProps['items'] = [
        {
            key: '1',
            label: (
                <a target="_blank" rel="noopener noreferrer" onClick={() => goto('/centre')}>
                    centre
                </a>
            ),
        },
        {
            key: '2',
            label: (
                <a target="_blank" rel="noopener noreferrer" onClick={() => goto('/favorites')}>
                    favorites
                </a>
            ),
        },
        {
            key: '3',
            label: (
                <a target="_blank" rel="noopener noreferrer" onClick={() => signOut()}>
                    sign out
                </a>
            ),
        },
    ];

    return (
        <div className='header-wrap'>
            <div className='logo'>
                <a href="/">Help Dog</a>
            </div>
            <div>
                {
                    !userInfo.name ? <div className='sign-in' onClick={() => goto('/login')}>Sign in</div> : <Dropdown menu={{ items }} placement="bottomLeft">
                        <div className='h-username'>{userInfo.name}</div>
                    </Dropdown>
                }


            </div>
        </div>
    )
})

export default AppHeader