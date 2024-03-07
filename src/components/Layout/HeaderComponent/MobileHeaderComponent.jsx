import React from 'react'
import {
    MenuOutlined,
    UserOutlined,
    BarChartOutlined,
    CalendarOutlined,
    CustomerServiceOutlined,
    DashboardOutlined,
    DatabaseOutlined,
    FileTextOutlined,
    SettingOutlined,
} from '@ant-design/icons';

import { Layout, Button, Flex, theme, Avatar, Drawer, Menu } from 'antd';
import Search from 'antd/es/input/Search';

const { Header } = Layout;

const MobileHeaderComponent = ({ setOpen, open }) => {

    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <>
            <Header
                style={{
                    background: colorBgContainer,
                }}
                className='mobile-header-container'
            >
                <Flex align='center' justify='space-between'>
                    <img width={25} src='/antdLogo.svg' className="antd-logo" />
                    <Flex align='center' >
                        <Avatar size={35} icon={<UserOutlined />} />
                        <Button
                            type="text"
                            icon={<MenuOutlined />}
                            onClick={() => setOpen(true)}
                            style={{
                                fontSize: '16px',
                                width: 64,
                                height: 64,
                            }}
                        />
                    </Flex>
                </Flex>
            </Header>
            <div style={{ position: 'relative' }}>
                <Drawer
                    title={<Search placeholder="input search text" size='large' onSearch={(value, _e, info) => console.log(info?.source, value)} />}
                    placement="top"
                    closable={true}
                    onClose={() => setOpen(false)}
                    open={open}
                >
                    <Menu
                        mode="inline"
                        defaultSelectedKeys={['1']}
                        items={[
                            {
                                key: '1',
                                icon: <DashboardOutlined style={{ fontSize: 20, margin: 'auto' }} />,
                                label: 'Dashboard'
                            },
                            {
                                key: '2',
                                icon: <BarChartOutlined style={{ fontSize: 20, margin: 'auto' }} />,
                                label: 'Charts'
                            },
                            {
                                key: '3',
                                icon: <DatabaseOutlined style={{ fontSize: 20, margin: 'auto' }} />,
                                label: 'Storage'
                            },
                            {
                                key: '4',
                                icon: <CalendarOutlined style={{ fontSize: 20, margin: 'auto' }} />,
                                label: 'Date & Time'
                            },
                            {
                                key: '5',
                                icon: <CustomerServiceOutlined style={{ fontSize: 20, margin: 'auto' }} />,
                                label: 'Support'
                            },
                            {
                                key: '6',
                                icon: <FileTextOutlined style={{ fontSize: 20, margin: 'auto' }} />,
                                label: 'Save'
                            },
                            {
                                key: '7',
                                icon: <UserOutlined style={{ fontSize: 20, margin: 'auto' }} />,
                                label: 'Account'
                            },
                            {
                                key: '8',
                                icon: <SettingOutlined style={{ fontSize: 20, margin: 'auto' }} />,
                                label: 'Settings'
                            },
                        ]}
                    />
                </Drawer>
            </div>
        </>
    )
}

export default MobileHeaderComponent