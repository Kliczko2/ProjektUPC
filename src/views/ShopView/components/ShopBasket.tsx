import { Avatar, Badge, Drawer, InputNumber } from 'antd'
import './../Shop.css'
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
    return Math.round(total * 100) / 100
  }

  console.log(selector)
  const groupByTitle = () => {
    const uniqueChars: any = []

    selector.forEach((element) => {
      if (!uniqueChars.find((item: any) => item.title === element.title)) {
        uniqueChars.push({
          title: element.title,
          image: element.image,
          price: element.price,
          quantity: 1,
        })
      } else {
        const x = uniqueChars.findIndex(
          (item: any) => item.title === element.title
        )

        uniqueChars[x].price += element.price
        uniqueChars[x].quantity += 1
      }
    })
    // const maxQuantity = Math.max(table) + 1
    // const difference = quantity - maxQuantity

    return uniqueChars
  }

  console.log('Siema', groupByTitle())
  const [shopBasketOpen, setShopBasketOpen] = useState<boolean>(false)
  return (
    <>
      <div
        onClick={() => {
          setShopBasketOpen(true)
        }}
      >
        <Badge count={selector.length}>
          <ShoppingCartOutlined className="shopBasket" />
        </Badge>
      </div>
      <div>
        <Drawer
          open={shopBasketOpen}
          onClose={() => {
            setShopBasketOpen(false)
          }}
        >
          {groupByTitle().map((item: any, idx: any) => (
            <div key={idx}>
              <p>
                <Avatar src={item.image} />
                <span style={{ margin: 10 }}>{item.title}</span>
                <InputNumber max={20} min={1}></InputNumber>
                <span style={{ margin: 10 }}>
                  {Math.round(item.price * 100) / 100}
                </span>
                <button
                  style={{ margin: 10 }}
                  onClick={() => dispatch(removeItem(item.title))}
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
