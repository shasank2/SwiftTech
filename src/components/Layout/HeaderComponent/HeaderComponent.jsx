import React from 'react'
import {
    BellOutlined,
    GlobalOutlined,
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UserOutlined,
} from '@ant-design/icons';

import { Layout, Button, Flex, theme, Select, Badge, Avatar } from 'antd';
import Search from 'antd/es/input/Search';

const { Header } = Layout;

const HeaderComponent = ({ collapsed, setCollapsed }) => {

    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <Header
            style={{
                background: colorBgContainer,
            }}
            className='header-container'
        >
            <Flex align='center'>
                <Flex justify='center'>
                    <img width={25} src='/antdLogo.svg' className="antd-logo" />
                </Flex>
                <Button
                    type="text"
                    icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                    onClick={() => setCollapsed(!collapsed)}
                    style={{
                        fontSize: '16px',
                        width: 64,
                        height: 64,
                    }}
                />

                <Search placeholder="input search text" size='large' onSearch={(value, _e, info) => console.log(info?.source, value)} style={{ width: 300 }} />
            </Flex>

            <Flex align='center' gap={20}>
                <Flex gap={8}>
                    <GlobalOutlined />
                    <Select
                        defaultValue="english"
                        style={{ width: 90 }}
                        options={[
                            { value: 'english', label: 'English' },
                            { value: 'nepali', label: 'Nepali' },
                        ]}
                    />
                </Flex>

                <Badge count={24}  color='blue'>
                    <Button
                   
                    icon={<BellOutlined />}
                    className='notification-button'
                    style={{
                        fontSize: '12px',
                        width: 40,
                        height: 40,
                        border: '#d9d9d9 1px solid'
                    }}
                />
                </Badge>
                <Avatar size={35} icon={<UserOutlined />} />
            </Flex>
        </Header>
    )
}

export default HeaderComponent