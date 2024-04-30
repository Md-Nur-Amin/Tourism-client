import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root.jsx';
import Home from './Components/Home/Home.jsx';
import Register from './Components/Register/Register.jsx';
import AddTouristSpot from './Components/AddTouristSpot/AddTouristSpot.jsx';
import AllTouristSpot from './Components/AllTouristSpot/AllTouristSpot.jsx';
import UpdateTourist from './Components/UpdateTourist/UpdateTourist.jsx';
import Login from './Components/Login/Login.jsx';
import AuthProvider from './Components/Providers/AuthProvider.jsx';
import TourDetails from './Components/TourDetails/TourDetails.jsx';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute.jsx';
import Profile from './Components/Profile/Profile.jsx';
import UpdateProfile from './Components/UpdateProfile/UpdateProfile.jsx';
import MyList from './Components/MyList/MyList.jsx';
import AllCountry from './Components/AllCountry/AllCountry.jsx';
import CountryDetails from './Components/CountryDetails.jsx/CountryDetails.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import Theme from './Components/Theme/Theme.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/tourist')
      },
      {
        path: '/profile',
        element: <Theme></Theme>,
      },
      {
        path: '/theme',
        element: <PrivateRoute> <Profile></Profile> </PrivateRoute>
      },
      {
        path: '/updateProfile',
        element: <PrivateRoute> <UpdateProfile></UpdateProfile> </PrivateRoute>,
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/addTouristSpot',
        element: <PrivateRoute> <AddTouristSpot></AddTouristSpot> </PrivateRoute>
      },
      {
        path: '/myList',
        element: <PrivateRoute> <MyList></MyList> </PrivateRoute>
      },
      {
        path: '/allTouristSpot',
        element: <AllTouristSpot></AllTouristSpot>,
        loader: () => fetch('http://localhost:5000/tourist')
      },
      {
        path: '/allCountry',
        element: <PrivateRoute> <AllCountry></AllCountry> </PrivateRoute>,
        loader: () => fetch('http://localhost:5000/countrySide')
      },
      {
        path: '/countryDetails/:id',
        element: <PrivateRoute> <CountryDetails></CountryDetails> </PrivateRoute>
      },
      {
        path: '/tourDetails/:id',
        element: <PrivateRoute> <TourDetails></TourDetails> </PrivateRoute>
      },

      {
        path: 'updateTourist/:id',
        element: <UpdateTourist></UpdateTourist>,
        loader: ({ params }) => fetch(`http://localhost:5000/tourist/${params.id}`)
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
