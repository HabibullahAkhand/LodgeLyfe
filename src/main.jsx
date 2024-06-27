import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Root from './components/Root';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import AuthProvider from './providers/AuthProvider';
import PrivateRoute from './routes/PrivateRoute';
import Profile from './components/Profile';
import EstateProperty from './components/EstateProperty/EstateProperty';
import Error from './components/Error/Error';
import HospitalityTechnologyRoute from './components/HospitalityTechnologyRoute/HospitalityTechnologyRoute';
import Contact from './components/Contact/Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement:<Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/HospitalityTechnologyRoute',
        element: <PrivateRoute><HospitalityTechnologyRoute></HospitalityTechnologyRoute></PrivateRoute>
      },
      {
        path: '/profile',
        element: <PrivateRoute><Profile></Profile></PrivateRoute>
      },
      {
        path: '/contact',
        element: <PrivateRoute><Contact></Contact></PrivateRoute>
      },
      {
        path:'/estateProperty/:id',
        element: <PrivateRoute><EstateProperty></EstateProperty></PrivateRoute>,
        loader:()=>fetch('/estates.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
