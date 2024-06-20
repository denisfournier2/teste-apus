import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import Home from "./pages/Home"
import { Header } from "./components/atoms/header"
import Escola from './pages/Escola'

function App() {

  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/escola/:id',
      element: <Escola />
    }
  ])

  return (
    <>
     <Header />
     <RouterProvider router={routes} />
    </>
  )
}

export default App
