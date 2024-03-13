import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import App from './App';
import AboutMePage from './pages/AboutMe';
import PortfolioPage from './pages/Portfolio';
import ContactMePage from './pages/ContactMe';
import ResumePage from './pages/Resume';

// Define the accessible routes
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <AboutMePage />,
      },
      {
        path: 'portfolio',
        element: <PortfolioPage />,
      },
      {
        path: 'contact',
        element: <ContactMePage />,
      },
      {
        path: 'resume',
        element: <ResumePage />,
      },
    ],
  },
]);

// Render the RouterProvider component
createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);