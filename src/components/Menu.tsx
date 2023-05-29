import React from 'react'
import { HomeOutlined, UserOutlined, ShoppingOutlined } from '@ant-design/icons'
import { Menu } from 'antd'
import type { MenuProps } from 'antd/es/menu'
import { useNavigate } from 'react-router'

type MenuItem = Required<MenuProps>['items'][number]

const MenuComp: React.FC = () => {
  const navigate = useNavigate()
  function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group'
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
      type,
    } as MenuItem
  }

  const items: MenuItem[] = [
    getItem('Home', '/', <HomeOutlined />),
    getItem('About', '/about', <UserOutlined />),
    getItem('Shop', '/shop', <ShoppingOutlined />, [
      getItem('Meski', '/shop/meski'),
      getItem('Damskie', '/shop/damskie'),
    ]),
  ]
  return (
    <Menu
      onClick={({ key }) => {
        navigate(key)
      }}
      defaultSelectedKeys={[window.location.pathname]}
      defaultOpenKeys={['sub1']}
      mode="vertical"
      theme="dark"
      items={items}
    />
  )
}

export default MenuComp
