import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Analytics } from '@vercel/analytics/react';
import './index.css'
import MainPage from "./mainpage/main.jsx"
import ErrorPage from './public/error-page.jsx';
import Cart from './cart/main.jsx';
import Login from './form/login.jsx';
import Folder from './folder/main.jsx';
import FileUpload from './form/upload-file.jsx';
import Edit from './form/edit.jsx';
import FolderCreate from './form/folder.jsx';
import { FolderProvider } from './public/folderContext.jsx';
import { CartProvider } from './public/cartContext.jsx';
import { AuthProvider } from './public/authContext.jsx'
import Outfit from './outfit/main.jsx';
import ConfirmOrder from './cart/confirmOrder.jsx';
import PlaceOrder from './cart/placeOrder.jsx';
import CheckOut from './cart/checkout.jsx';
import { WebSocketProvider } from './public/webSocket.jsx';

export default function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainPage />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "",
          element: <Outfit />,
        },
        {
          path: "cart",
          element: <Cart />,
          children: [
            {
              path: "",
              element: <ConfirmOrder />,
            },
            {
              path: "placeorder",
              element: <PlaceOrder />,
            },
            {
              path: "checkout/:orderId",
              element: <CheckOut />,
            }
          ]
        },
        {
          path: "admin",
          element: <Login />,
        },
        {
          path: "folder",
          element: <FolderCreate />,
        },
        {
          path: "file/upload/:folderId?",
          element: <FileUpload/>,
        },
        {
          path: "file/:fileId",
          element: <Edit/>,
        },
      ],
    },
  ]);

  return (
    <FolderProvider>
      <AuthProvider>
        <CartProvider>
          <WebSocketProvider>
            <RouterProvider router={router} />
            <Analytics />
          </WebSocketProvider>
        </CartProvider>
      </AuthProvider>
    </FolderProvider>
  );
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)




