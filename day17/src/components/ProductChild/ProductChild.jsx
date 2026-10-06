export default function ProductChild({ product, userName }) {
  return (
    <div className="mt-2">
      <h5 className="bg-primary text-white p-2 text-center">Child - Welcome {userName}</h5>
      <div className="bg-warning p-3 rounded">
        <p>Name: {product.prodName}</p>
        <p>Price: {product.price}</p>
        <p>Status: {product.onSale? 'On Sale 20%' : 'No Sale'}</p>
      </div>
    </div>
  )
}