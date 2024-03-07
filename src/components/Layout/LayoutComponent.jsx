import React, { useState } from 'react';
import {
  BarChartOutlined,
  CalendarOutlined,
  CustomerServiceOutlined,
  DashboardOutlined,
  DatabaseOutlined,
  FileTextOutlined,
  SettingOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Flex, Breadcrumb } from 'antd';

import './layoutComponent.css'
import { Typography } from 'antd';

const { Title } = Typography;
import HeaderComponent from './HeaderComponent/HeaderComponent';
import MobileHeaderComponent from './HeaderComponent/MobileHeaderComponent';
import FooterComponent from './FooterComponent';

const { Sider, Content } = Layout;

const LayoutComponent = ({ children }) => {
  const [collapsed, setCollapsed] = useState(true);
  const [open, setOpen] = useState(false)

  return (
    <Layout style={{ backgroundColor: "white", width: '100%' }} >
      <Flex>
        <HeaderComponent collapsed={collapsed} setCollapsed={setCollapsed} />
      </Flex>
      <MobileHeaderComponent open={open} setOpen={setOpen} />
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed} style={{ backgroundColor: "white" }} className='sidebar-container'>
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
        </Sider>
        <Layout>
          <Content
            style={{
              padding: 18,
            }}
          >
            <Breadcrumb
              separator="/"
              items={[
                {
                  title: 'Home',
                },
                {
                  title: 'List',
                },
              ]}
            />
            <Title level={2}>List</Title>
            {children}
          </Content>
          <FooterComponent /> 
        </Layout>
      </Layout>

    </Layout>
  )
}

export default LayoutComponent


