import React from 'react'
import './Shop.css'
import ProductList from './components/ProductsList'
import { Row } from 'antd'

const ShopView: React.FC = () => {
  return (
    <div className="shop">
      <h2 className="title">Shop</h2>
      <div style={{ margin: 40 }}></div>
      <div style={{ margin: 35 }}>
        <Row>
          <ProductList />
        </Row>
      </div>
    </div>
  )
}
export default ShopView
