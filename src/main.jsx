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
import Momentum from "./Components/Pages/Momentum.jsx"

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
  {
    path: "/overcoming-the-fear-of-making-mistakes",
    element: <Momentum/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
