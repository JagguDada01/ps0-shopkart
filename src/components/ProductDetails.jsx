import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router'
import './ProductDetails.css'

function ProductDetails({ setCartCount }) {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [notFound, setNotFound] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((response) => {
        if (!response.ok) {
          setNotFound(true)
        }
        return response.json()
      })
      .then((data) => setProduct(data))
      .catch(() => setError(true))
  }, [id])

  if (notFound) {
    return (
      <main className="not-found">
        <h2>Product not found</h2>
        <Link to="/products">Back to Products</Link>
      </main>
    )
  }

  if (error) {
    return (
      <main className="not-found">
        <h2>Could not load this product</h2>
        <Link to="/products">Back to Products</Link>
      </main>
    )
  }

  if (!product) {
    return (
      <main className="not-found"><p>Loading product...</p></main>
    )
  }

  return (
    <main className="product-details-page">
      <p>
        <Link to="/products">← Back to Products</Link>
      </p>
      <div className="product-details-content">
        <img className="detail-image" src={product.images[0]} alt={product.title} />
        <div>
          <h1>{product.title}</h1>
          <p><strong>Brand:</strong> {product.brand}</p>
          <p>{product.description}</p>
          <h2>${product.price}</h2>
          <p><strong>Discount:</strong> {product.discountPercentage}% off</p>
          <p><strong>Stock:</strong> {product.stock}</p>
          <p>⭐ {product.rating}</p>
          <button className="cart-button" onClick={() => setCartCount((count) => count + 1)}>
            Add to Cart
          </button>
        </div>
      </div>
      <h2>Reviews</h2>
      {product.reviews?.map((review) => (
        <p key={review.reviewerEmail}>⭐ {review.rating} — {review.comment}</p>
      ))}
    </main>
  )
}

export default ProductDetails

