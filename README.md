# PS0 — ShopKart

ShopKart is a small product store built with React and React Router. It has a home page, a searchable product list, and a detail page for each product.

## Project details

- **PS number:** PS0
- **Project name:** ShopKart
- **API used:** [DummyJSON Products API](https://dummyjson.com/products)
- **GitHub repository:** [ps0-shopkart](https://github.com/JagguDada01/ps0-shopkart)
- **Live link:** Add the deployed Vercel or Netlify URL here

## Routes

| Route | Page |
| --- | --- |
| `/` | Home page with a link to the store |
| `/products` | Product grid with search by title |
| `/products/:id` | Product details, reviews, and Add to Cart button |
| `*` | Page not found with a link back Home |

## Features

- React Router navigation
- Dynamic product route using `useParams`
- Product data loaded with `useEffect` and `fetch`
- Loading and error messages
- Controlled search input
- Reusable `ProductCard` component
- Responsive product grid
- Cart count in the Navbar

## Run locally

```bash
npm install
npm run dev
```

To create a production build:

```bash
npm run build
```

## Screenshots

Add two screenshots here before submitting:

1. Products page with the search input and product cards
2. Product details page showing the product information and reviews

## Deployment

The project includes `vercel.json` so refreshing a nested route such as `/products/5` serves the React application instead of returning a 404.
