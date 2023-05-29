import { Avatar, Drawer } from 'antd'
import React, { useState } from 'react'
import { ShoppingCartOutlined } from '@ant-design/icons'
import { useAppSelector, useAppDispatch } from '../../../hooks/hooks'
import { removeItem } from '../../../reducers/shopBasket'
const ShopBasket: React.FC = () => {
  const dispatch = useAppDispatch()
  const selector = useAppSelector((state) => state.shopBasket.cart)
  const getTotalPrice = () => {
    let total = 0
    selector.forEach((item) => {
      total += item.price
    })
    return total
  }
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
          {selector.map((item: any, idx: any) => (
            <div key={idx}>
              <p>
                <Avatar src={item.image} />
                {item.title} <span>{item.price}</span>
                <button
                  style={{ margin: 10 }}
                  onClick={() => dispatch(removeItem(idx))}
                >
                  Usuń
                </button>
              </p>
            </div>
          ))}
          <div>In stock: {getTotalPrice()}</div>
        </Drawer>
      </div>
    </>
  )
}
export default ShopBasket
