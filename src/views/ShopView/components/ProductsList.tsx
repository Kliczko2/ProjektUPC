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
interface IFiltersProps {
  sortPrice: string
}

const ProductsList: React.FC<IFiltersProps> = ({ sortPrice }) => {
  const navigate = useNavigate()
  const { categoryName } = useParams()

  const filteredByCategory = products.filter((product) => {
    return categoryName == product.category
  })

  filteredByCategory.sort(
    (product1: IProductsListProps, product2: IProductsListProps) => {
      if (sortPrice == 'low') {
        if (product1.price > product2.price) {
          return 1
        }
        if (product1.price < product2.price) {
          return -1
        }
      } else if (sortPrice == 'high') {
        if (product1.price > product2.price) {
          return -1
        }
        if (product1.price < product2.price) {
          return 1
        }
      } else if (sortPrice == 'az') {
        if (product1.title.toLowerCase() > product2.title.toLowerCase()) {
          return 1
        }
        if (product1.title.toLowerCase() < product2.title.toLowerCase()) {
          return -1
        }
      } else if (sortPrice == 'za') {
        if (product1.title.toLowerCase() > product2.title.toLowerCase()) {
          return -1
        }
        if (product1.title.toLowerCase() < product2.title.toLowerCase()) {
          return 1
        }
      }
      return 0
    }
  )

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
