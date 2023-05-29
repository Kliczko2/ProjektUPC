import React, { useState } from 'react'
import './Shop.css'
import ProductList from './components/ProductsList'
import { Row } from 'antd'
import ProductFilter from './components/ProductFilter'

const ShopView: React.FC = () => {
  const [filters, setFilters] = useState<string>('az')

  return (
    <div className="shop">
      <h2 className="title">Shop</h2>
      <div style={{ margin: 40 }}></div>
      <div style={{ margin: 35 }}>
        <Row>
          <ProductList sortPrice={filters} />
        </Row>
      </div>
    </div>
  )
}
export default ShopView
