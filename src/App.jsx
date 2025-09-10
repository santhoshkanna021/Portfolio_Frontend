import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Contact from './pages/Contact';
import Work from './pages/Work';
import Layout from './pages/Layout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Homepage /> },
      { path: "/About", element: <About /> },
      { path: "/Contact", element: <Contact /> },
      { path: "/Work", element: <Work /> },
    ]
  }
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;
