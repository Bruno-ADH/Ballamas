import React from 'react';
import { createBrowserRouter, Outlet, RouterProvider, useNavigation, useRouteError } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import './style/fonts.css';
import './style/style.css';
import Header from './pages/MainPages/Header';
import Meta from './pages/Meta';
import Footer from './pages/MainPages/Footer';
import ProductDetail from './pages/RelatedPages/ProductDetail';
import CartPage from './pages/RelatedPages/CartPage';
import CheckoutPage from './pages/RelatedPages/CheckoutPage';
import Home from './pages/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <PageError />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      
      {
        path: '/product/:id',
        element: <ProductDetail />
      },
      {
        path: 'cart',
        element: <CartPage/>
      },
      {
        path: 'checkout',
        element: <CheckoutPage/>
      }

    ]
  }
])

function PageError() {
  const error = useRouteError()
  console.log('error :>> ', error);

  return <div className="d-flex justify-content-center align-items-center bg-light vh-100">
    <div className="bounceAnime">
      <h3 className='h3 text-muted text-uppercase'>Une erreur est survenue</h3>
      <p>
        {error?.error?.toString() ?? error?.toString()}
      </p>
    </div>
  </div>
}

function Root() {
  const { state } = useNavigation()
  console.log('state :>> ', state);
  return <div className=''>
    <Meta />
    <Header />
    <div className="container">
      {state === 'loading' && <div className="spinner-border text-olive border-olive" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      }
      <Outlet />
    </div>
    <Footer />
  </div>
}

function App() {
  return <RouterProvider router={router} />
}

export default App
