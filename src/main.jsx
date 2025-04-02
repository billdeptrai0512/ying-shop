/* eslint-disable react-refresh/only-export-components */
import { StrictMode, useContext } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css'
import MainPage from './Mainpage/MainPage.jsx'
import Body from './Mainpage/Body/body.jsx';
import ErrorPage from './Error-Page.jsx';
import Cart from './Cart/Cart.jsx';
//one way is to wrap up a function + state and return the router

import { createContext, useState } from 'react';

const CartContext = createContext()

export function useCart() {
  return useContext(CartContext)
}

function CartProvider({ children }) {

  const [cart, setCart] = useState([]);

  const saveOutFitInCart = (outfit) => {

    setCart(prevCart => [...prevCart, outfit]);
 
  };

  return (
    <CartContext.Provider value={{ cart, saveOutFitInCart }}>
      {children}
    </CartContext.Provider>
  );
}

function App() {

    const router = createBrowserRouter([
      {
        path: "/",
        element: <MainPage />,
        errorElement: <ErrorPage />,
        children: [
          {
            path: "", //default body
            element: <Body />,
          },
          {
            path: "cart",
            element: <Cart />
          }
        ]
      },
    ])

    return (
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)




