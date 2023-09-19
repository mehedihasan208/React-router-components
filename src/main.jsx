import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/home.jsx';
import About from './components/About/About.jsx';
import Contact from './components/Contact/Contact.jsx';
import User from './components/User/User.jsx';
import UserDatails from './components/UsersDetails/UserDatails.jsx';
import PostDetails from './components/PostDetails/PostDetails.jsx';
import PostInfo from './components/PostInfo/PostInfo.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Home></Home>,
    children : [
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>
      },
      {
        path: "/user",
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/users'),
        element:<User></User>
      },
      {
        path:"/users/:usersId",
        loader:({params}) =>fetch(`https://jsonplaceholder.typicode.com/users/${params.usersId}`),
        element:<UserDatails></UserDatails>
      },
      {
        path:"/post",
        loader: () =>fetch('https://jsonplaceholder.typicode.com/posts'),
        element:<PostDetails></PostDetails>
      },
      {
        path:"/posts/:postsId",
        loader: ({params}) =>fetch(`https://jsonplaceholder.typicode.com/posts/${params.postsId}`),
        element:<PostInfo></PostInfo>
      }
      
    ]
  },
  {
   
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
