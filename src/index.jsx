import React from "react"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { createRoot } from "react-dom/client"
import Home from "./components/pages/Home/Home.jsx"
import ErrorPage from "./components/pages/ErrorPage/ErrorPage.jsx"
import './style/theme.scss'

const router = createBrowserRouter([
  // This array is to add new routes to the app.
  {
    path: "/",
    element: <Home />,
    // errorElement: <ErrorPage />,
  },
])

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)