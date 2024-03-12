import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import App from './App';
import AboutMePage from './pages/AboutMe/AboutMe';
import PortfolioPage from './pages/Portfolio/Portfolio';
import ContactMePage from './pages/ContactMe/ContactMe';
import ResumePage from './pages/Resume/Resume';

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