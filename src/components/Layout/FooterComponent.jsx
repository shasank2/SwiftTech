import { Divider, Flex } from 'antd'
import React from 'react'

import './footerComponent.css'
import { FacebookOutlined, InstagramOutlined, TwitterOutlined, YoutubeOutlined } from '@ant-design/icons'

const FooterComponent = () => {

    return (
        <>
            <Flex className='footer-container'>
                <Flex className='footer-nav'>
                    <span>About</span>
                    <span>Career</span>
                    <span>Blog</span>
                    <span>Terms & Conditions</span>
                </Flex>

                <Flex className='social-media-icons'>
                    <FacebookOutlined />
                    <InstagramOutlined />
                    <TwitterOutlined />
                    <YoutubeOutlined />
                </Flex>
                © 2023 antforfigma.com, All right reserved.
            </Flex>
        </>
    )
}

export default FooterComponent