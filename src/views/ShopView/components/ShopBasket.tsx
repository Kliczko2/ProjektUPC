import { Drawer } from 'antd'
import React, { useState } from 'react'
import { ShoppingCartOutlined } from '@ant-design/icons'
import { useAppSelector } from '../../../hooks/hooks'

const ShopBasket: React.FC = () => {
  const selector = useAppSelector((state) => state.shopBasket.cart)

  const [shopBasketOpen, setShopBasketOpen] = useState<boolean>(false)
  return (
    <>
      <div
        onClick={() => {
          setShopBasketOpen(true)
        }}
      >
        <ShoppingCartOutlined />
      </div>
      <div>
        <Drawer
          open={shopBasketOpen}
          onClose={() => {
            setShopBasketOpen(false)
          }}
        >
          <div>
            {selector.map((product) => {
              product.title
            })}
          </div>
        </Drawer>
      </div>
    </>
  )
}
export default ShopBasket
