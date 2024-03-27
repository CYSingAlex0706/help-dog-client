import React, { memo, useState } from 'react'
import type { MenuProps, GetProp } from 'antd';
import { Layout, Flex, Menu } from 'antd';

import './style.css'
import DogLists from './components/dog-lists';
import Code from './components/code';
import Profile from './components/profile';

// const { Sider, Content } = Layout;

// const contentStyle: React.CSSProperties = {
//     textAlign: 'center',
//     minHeight: 120,
//     lineHeight: '120px',
//     color: '#fff',
//     backgroundColor: '#0958d9',
// };

// const siderStyle: React.CSSProperties = {
//     textAlign: 'center',
//     lineHeight: '120px',
//     color: '#fff',
//     backgroundColor: '#1677ff',
// };

type MenuTheme = GetProp<MenuProps, 'theme'>;
type MenuItem = GetProp<MenuProps, 'items'>[number];

function getItem(
    label: React.ReactNode,
    key?: React.Key | null,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('profile', 'profile'),
    getItem('dog lists', 'dog'),
    getItem('sign up code', 'code'),
];


const Centre = memo(() => {
    const [selectKey, setSelectKey] = useState('profile')

    const menuClick: MenuProps['onClick'] = e => {
        setSelectKey(e.key)
    }
    return (
        <div className='views-main centre-main'>
            <div className='sider'>
                <h4 className='centre-title'>Centre</h4>
                <Menu
                    style={{ width: 256 }}
                    selectedKeys={[selectKey]}
                    defaultSelectedKeys={['profile']}
                    mode='inline'
                    theme='light'
                    items={items}
                    onClick={menuClick}
                />
            </div>
            <div className='right-area'>
                {selectKey === 'profile' && <Profile />}
                {selectKey === 'dog' && <DogLists />}
                {selectKey === 'code' && <Code />}
            </div>
        </div>
    )
})

export default Centre