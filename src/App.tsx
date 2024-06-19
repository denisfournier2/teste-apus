import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import Home from "./pages/Home"
import { Header } from "./components/atoms/header"
import { Search } from './components/atoms/search'
import Escola from './pages/Escola'
import { useState } from 'react'

function App() {
  const [escola, setEscola] = useState<string>()

  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/escola',
      element: <Escola />
    }
  ])

  return (
    <>
     <Header />
     <Search escola={escola} />
     <RouterProvider router={routes} />
    </>
  )
}

export default App
