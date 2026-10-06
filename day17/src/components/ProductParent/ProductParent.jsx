import { useState } from 'react'
import ProductChild from '../ProductChild/ProductChild.jsx'
export default function ProductParent() {
  const [product] = useState({ prodName: 'iPhone 15 Pro', price: 45000, quantity: 12, onSale: true })
  return (
    <div className="bg-light p-3 rounded shadow-sm">
      <h3 className="bg-success text-white p-2 text-center">1- Product Parent</h3>
      <ProductChild product={product} userName="Ahmed" />
    </div>
  )
}