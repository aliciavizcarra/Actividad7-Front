import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter} from "react-router-dom";
import App from './App';
import Registro from './components/Usuarios/Register';
import Catalogo from './components/Libros/Catalogo';
import Prestamos from './components/Libros/Prestamos';
import Login from './components/Usuarios/Login';

const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    children:[
      {path:"registro", element:<Registro/>},
      {path:"catalogo", element:<Catalogo/>},
      {path:"prestados",element:<Prestamos/>},
      {path:"login", element:<Login/>}

    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
