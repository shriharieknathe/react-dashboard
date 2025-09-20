import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import DashboardPage from './pages/DashboardPage'
import OrdersPage from './pages/OrdersPage'
import ProjectsPage from './pages/ProjectsPage'
import ProfilePage from './pages/ProfilePage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <DashboardPage /> },
      { path: 'orders', element: <OrdersPage /> },
      { path: 'projects', element: <ProjectsPage /> },
      { path: 'profile', element: <ProfilePage /> },
      { path: 'profile/*', element: <ProfilePage /> },
      
      // Dashboard routes
      { path: 'analytics', element: <div className="p-6">Analytics Dashboard</div> },
      { path: 'reports', element: <div className="p-6">Reports Dashboard</div> },
      
      // eCommerce routes
      { path: 'ecommerce/*', element: <div className="p-6">eCommerce Dashboard</div> },
      
      // Courses routes  
      { path: 'courses/*', element: <div className="p-6">Online Courses</div> },
      
      // Other routes
      { path: 'account/*', element: <div className="p-6">Account Page</div> },
      { path: 'corporate/*', element: <div className="p-6">Corporate Page</div> },
      { path: 'blog/*', element: <div className="p-6">Blog Page</div> },
      { path: 'social/*', element: <div className="p-6">Social Page</div> },
    ],
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
