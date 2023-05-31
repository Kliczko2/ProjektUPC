import { Avatar, Badge, Drawer, InputNumber } from 'antd'
import './../Shop.css'
import React, { useState } from 'react'
import { ShoppingCartOutlined } from '@ant-design/icons'
import { useAppSelector, useAppDispatch } from '../../../hooks/hooks'
import { removeItem, incrementByInput } from '../../../reducers/shopBasket'

interface IShopBasketProps {
  title: string
  image: string
  price: number
  quantity: number
}
interface IProductsBasketProps {
  isNew: boolean
  price: number
  title: string
  discount: number
  image: string
  secondImage: string
  category: string
  categoryId: number
  productKey: string
  id: number
  quantity: number
}

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

  const handleChange = (value: any, id: string) => {
    dispatch(incrementByInput({ value: value, title: id }))
  }

  console.log(selector)
  const groupByTitle = () => {
    const uniqueChars: any = []

    selector.forEach((element) => {
      if (
        !uniqueChars.find(
          (item: IShopBasketProps) => item.title === element.title
        )
      ) {
        uniqueChars.push({
          title: element.title,
          image: element.image,
          price: element.price,
          quantity: 1,
        })
      } else {
        const x = uniqueChars.findIndex(
          (item: IShopBasketProps) => item.title === element.title
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
          {groupByTitle().map((item: IProductsBasketProps, idx: number) => (
            <div key={idx}>
              <p>
                <Avatar src={item.image} />
                <span style={{ margin: 10 }}>{item.title}</span>
                <InputNumber
                  keyboard={false}
                  onChange={(value) => handleChange(value, item.title)}
                  min={1}
                  max={20}
                  onKeyDown={(e) =>
                    e.keyCode != 38 && e.keyCode != 40 && e.preventDefault()
                  }
                ></InputNumber>
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
