import { useEffect, useState } from 'react'
import './Products.css'
import ProductCard from './ProductCard'

function Products() {
  const [products, setProducts] = useState([])
  const [search, setSearch] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetch('https://dummyjson.com/products?limit=30')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Could not load products')
        }
        return response.json()
      })
      .then((data) => setProducts(data.products))
      .catch(() => setError('Could not load products. Please try again.'))
      .finally(() => setLoading(false))
  }, [])

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <main className="products-page">
      <h1>Products</h1>
      <input
        className="search-input"
        type="search"
        placeholder="Search by title"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      {search && (
        <button className="clear-search" onClick={() => setSearch('')}>
          Clear search
        </button>
      )}
      {loading && <p>Loading products...</p>}
      {error && <p className="error-message">{error}</p>}
      {!loading && !error && <p className="result-count">Showing {filteredProducts.length} products</p>}
      <div className="product-grid">
        {filteredProducts.map((product) => <ProductCard key={product.id} product={product} />)}
      </div>
    </main>
  )
}

export default Products



