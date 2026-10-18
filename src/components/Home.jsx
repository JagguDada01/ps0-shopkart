import { Link } from 'react-router'
import './Home.css'

function Home() {
  return (
    <main className="home-page">
      <div className="home-content">
        <p className="home-icon">🛍️</p>
        <h1>Everything you need, in one place.</h1>
        <p className="home-description">
          Discover useful products at prices you will love.
        </p>
        <Link to="/products" className="shop-button">
          Shop now
        </Link>
      </div>
    </main>
  )
}

export default Home
