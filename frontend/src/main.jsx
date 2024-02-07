import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import './index.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}></Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
<RouterProvider router={router}/>,
)
