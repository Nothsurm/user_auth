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
import Register from './pages/Register.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route path="/signup" element={<Register />}></Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
<RouterProvider router={router}/>,
)
