import { Link } from 'react-router'

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img
        src={product.thumbnail}
        alt={product.title}
        className="product-image"
      />
      <h3>
        <Link to={`/products/${product.id}`}>{product.title}</Link>
      </h3>
      <p><strong>${product.price}</strong></p>
      <p className="product-rating">⭐ {product.rating}</p>
    </div>
  )
}

export default ProductCard
