import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.tsx'
import ErrorPage from './pages/Error.tsx'
import AllMeetups from './pages/AllMeetups'
import NewMeetup from './pages/NewMeetup'
import Favorites from './pages/Favorites'
import Meetup from './pages/Meetup'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <AllMeetups />,
      },
      {
        path: 'new-meetup',
        element: <NewMeetup />,
      },
      {
        path: 'favorites',
        element: <Favorites />,
      },
      {
        path: 'meetup/:id',
        element: <Meetup />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
