import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import Login from './Pages/Login';
import FirebasedProvider from './firebase/FirebasedProvider';
import About from './Components/About/About';
import ContactUS from './Components/Contact Us/ContactUS';
import NotFound from './Components/NotFound';
import Register from './Pages/Register';
import Details from './Pages/Details';
import PrivateRoute from './routes/PrivateRoute';

import UpdateUserProfile from './Components/UpdateUserProfile/UpdateUserProfile';
import { ToastContainer } from 'react-toastify';
import Agency from './Components/Agency/Agency';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/speciality.json")
      },
      {
        path: "/lists/:id",
        element: <PrivateRoute><Details></Details></PrivateRoute>,
        loader: () => fetch("/speciality.json")
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/contactUs",
        element: <ContactUS></ContactUS>
      },
      {
        path: "/updateProfile",
        element : <PrivateRoute><UpdateUserProfile></UpdateUserProfile></PrivateRoute>
      },
      {
        path: "/agency",
        element: <PrivateRoute><Agency></Agency></PrivateRoute>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirebasedProvider>
      <RouterProvider router={router} />
      <ToastContainer></ToastContainer>
    </FirebasedProvider>
    
  </React.StrictMode>,
)
