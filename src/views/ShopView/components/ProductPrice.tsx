import React from 'react'

interface IProductPriceProps {
  price: number
  discount: number
}

const ProductPrice: React.FC<IProductPriceProps> = ({ price, discount }) => {
  return (
    <p>
      {`Price: $${price}`}
      <span className="discount">
        {' '}
        {discount > 0
          ? '$' + Math.round((price + discount * price) * 100) / 100
          : ' '}
      </span>
    </p>
  )
}

export default ProductPrice
