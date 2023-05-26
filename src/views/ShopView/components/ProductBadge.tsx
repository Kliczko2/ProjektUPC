import { Badge } from 'antd'
import React from 'react'

type IProductBadgeProps = {
  isNew: boolean
  children?: React.ReactNode
}

const ProductBadge: React.FC<IProductBadgeProps> = ({ isNew, children }) => {
  if (isNew) {
    return <Badge.Ribbon text="New">{children}</Badge.Ribbon>
  }
  return <>{children}</>
}

export default ProductBadge
