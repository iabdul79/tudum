import { createBrowserRouter, RouterProvider } from "react-router-dom"
import CreateTask from "../pages/CreateTask"
import HomePage from "../pages/HomePage"
import NotFoundPage from "../pages/NotFoundPage"

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <NotFoundPage />
  },
  {
    path: '/addTask',
    element: <CreateTask />,
    errorElement: <NotFoundPage />
  }
])

export default function Router() {
  return (
    <RouterProvider router={router} />
  )
}