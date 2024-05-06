import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App.jsx'
import Blog from "./Components/Pages/Blog.jsx"
import './index.css'
import About from './Components/Pages/About.jsx';
import Manual from "./Components/Pages/Manual.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },  
  {
    path: "/blog",
    element: <Blog/>,
  },
  {
    path: "/about",
    element: <About/>,
  },
  {
    path: "/manual",
    element: <Manual/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
