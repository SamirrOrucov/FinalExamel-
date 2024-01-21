import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './reset.scss'
import BasketProvider from './context/BasketContext.jsx'
import { HelmetProvider } from 'react-helmet-async'
import WishlistProvider from './context/WishlistContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BasketProvider>
      <HelmetProvider>
        <WishlistProvider>
          <App />
        </WishlistProvider>
      </HelmetProvider>
    </BasketProvider>
  </React.StrictMode>,
)
