import React from 'react'
import './../Shop.css'
import { products } from '../../../constants/products'
import ProductCard from './ProductCard'
import { useParams, useNavigate } from 'react-router'

interface IProductsListProps {
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
}

const ProductsList: React.FC = () => {
  const navigate = useNavigate()
  const { categoryName } = useParams()

  const filteredByCategory = products.filter((product) => {
    return categoryName == product.category
  })

  return (
    <>
      {filteredByCategory.map((product: IProductsListProps) => (
        <div
          onClick={() => navigate(`./${product.productKey}`)}
          key={product.id}
        >
          <ProductCard
            price={product.price}
            isNew={product.isNew}
            title={product.title}
            discount={product.discount}
            image={product.image}
            secondImage={product.secondImage}
          />
        </div>
      ))}
    </>
  )
}
export default ProductsList
