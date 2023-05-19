import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/home.tsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '*', element: <div>404</div> },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
