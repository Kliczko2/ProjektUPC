import React from 'react'

import { Layout } from 'antd'
import './Layout.css'
import MenuComp from '../components/Menu'
import { Outlet } from 'react-router-dom'
import {
  YoutubeOutlined,
  FacebookOutlined,
  TwitterOutlined,
} from '@ant-design/icons'
import ShopBasket from '../views/ShopView/components/ShopBasket'
const { Header, Footer, Sider } = Layout

const LayoutView: React.FC = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider style={{ display: 'flex', flexDirection: 'row' }}>
        <MenuComp />
      </Sider>
      <Layout>
        <Header className="header">
          <div style={{ width: 200 }}>
            <a href="/">
              <img
                style={{
                  position: 'absolute',
                  left: 210,
                  top: 0,
                  width: '90px',
                  height: '90px',
                }}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/BMW_logo_%28gray%29.svg/2048px-BMW_logo_%28gray%29.svg.png"
              />
            </a>
          </div>
          <div style={{ float: 'left', width: 1400, textAlign: 'center' }}>
            <h1>Sklep internetowy</h1>
          </div>
          <div className="basketLogo">
            <ShopBasket />
          </div>
        </Header>
        <Outlet />
        <Footer className="social" style={{ textAlign: 'center' }}>
          <div>
            <a target="_blank" href="https://www.youtube.com/">
              <YoutubeOutlined
                style={{ color: 'white', fontSize: 50, margin: 20 }}
              />
            </a>
            <a target="_blank" href="https://www.facebook.com/">
              <FacebookOutlined
                style={{ color: 'white', fontSize: 50, margin: 20 }}
              />
            </a>
            <a target="_blank" href="https://twitter.com/">
              <TwitterOutlined
                style={{ color: 'white', fontSize: 50, margin: 20 }}
              />
            </a>
          </div>
        </Footer>
      </Layout>
    </Layout>
  )
}

export default LayoutView
