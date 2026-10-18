import { useState } from 'react'
import { Routes, Route, Link, BrowserRouter } from 'react-router'
import Home from "./components/Home"
import Products from "./components/Products"
import ProductDetails from "./components/ProductDetails"
import './App.css'

function App() {
  const [cartCount, setCartCount] = useState(0)

  return (
    <BrowserRouter>
      <nav className="navbar">
        <Link to="/" className="brand">
          🛒 ShopKart
        </Link>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <span>Cart: {cartCount}</span>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails setCartCount={setCartCount} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

function NotFound() {
  return (
    <main className="not-found">
      <h1>Page not found</h1>
      <Link to="/">Go back Home</Link>
    </main>
  )
}

export default App

