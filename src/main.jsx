import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import { RouterProvider, createBrowserRouter} from "react-router-dom";
import Registro from './components/Register';

const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    children:[
      {path:"registro", element:<Registro/>},
      {path:"catalogo", element:<Registro/>},
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)