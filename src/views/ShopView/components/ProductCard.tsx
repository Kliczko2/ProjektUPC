import React, { useState } from 'react'
import { Card } from 'antd'
import ProductBadge from './ProductBadge'
import ProductPrice from './ProductPrice'

interface IProductCardProps {
  isNew: boolean
  title: string
  image: string
  secondImage: string
  price: number
  discount: number
}

const { Meta } = Card

const ProductCard: React.FC<IProductCardProps> = ({
  isNew,
  title,
  image,
  secondImage,
  price,
  discount,
}) => {
  const [currentimage, setCurrentImage] = useState(0)
  return (
    <ProductBadge isNew={isNew}>
      <Card
        title={title}
        hoverable
        className="card"
        cover={
          <img
            style={{ width: 210, height: 170 }}
            alt="example"
            onMouseOut={() => setCurrentImage(0)}
            onMouseOver={() => setCurrentImage(1)}
            src={currentimage == 1 ? secondImage : image}
          />
        }
      >
        <Meta title={<ProductPrice price={price} discount={discount} />} />
      </Card>
    </ProductBadge>
  )
}
export default ProductCard
