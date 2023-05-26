import React from 'react'
import '../Shop.css/'
import { Button, Form, Select } from 'antd'

interface IProductFilterProps {
  setFilters: (sortPrice: string) => void
}

const ProductFilter: React.FC<IProductFilterProps> = ({ setFilters }) => {
  const onFinish = (values: string) => {
    setFilters(values)
  }

  return (
    <div style={{}}>
      <Form
        layout="inline"
        onFinish={onFinish}
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ color: 'white' }}
        autoComplete="off"
      >
        <Form.Item
          label={
            <label style={{ color: 'white', fontSize: 20, width: 60 }}>
              Sorting
            </label>
          }
          name="sortPrice"
          style={{ marginLeft: 25, marginRight: 25, float: 'left' }}
        >
          <Select style={{ width: 200 }}>
            <Select.Option value="low">From the lowest price</Select.Option>
            <Select.Option value="high">From the highest price</Select.Option>
            <Select.Option value="az">A-Z</Select.Option>
            <Select.Option value="za">Z-A</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
export default ProductFilter
