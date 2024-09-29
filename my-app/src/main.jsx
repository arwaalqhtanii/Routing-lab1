// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
// import {createBrowserRouter,RouterProvider,} from 'react-router-dom'
// import Home from './pages/Home.jsx'
// import About from './pages/About.jsx'


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App/>,
//   },
// ]);
// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//     <RouterProvider router={router} />
//     <Home/>
//     <About/>
//   </StrictMode>,
// )


import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; 
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    
  </React.StrictMode>
);

