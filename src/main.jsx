import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home';
import Main from './Components/Layout/Main';
import About from './Components/About/About';
import Teachers from './Components/Teachers/Teachers';
import Students from './Components/Students/Students';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,

      },
      {
        path: 'teachers',
        element: <Teachers></Teachers>,
        loader: () => fetch('teachers.json')
      },
      {
        path: 'students',
        element: <Students></Students>,
        loader: () => fetch('students.json')
      },
      {
        path: 'about',
        element: <About></About>
      }
    ]
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
