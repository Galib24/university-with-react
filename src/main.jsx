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
import StudentChart from './Components/Student Chart/StudentChart';
import Login from './Components/login/Login';
import SignUp from './Components/Signup/SignUp';

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
        path: 'studentChart',
        element: <StudentChart></StudentChart>,
      },
      {
        path: 'about',
        element: <About></About>
      },
      {
        path: 'login',
        element: <Login></Login>
      },
      {
        path: 'signUp',
        element: <SignUp></SignUp>
      }
    ]
  }
])



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
