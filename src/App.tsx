import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import Home from "./pages/Home"
import { Header } from "./components/atoms/header"

function App() {

  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    // {
    //   path: '/captured',
    //   element: <Captured />
    // }
  ])

  return (
    <>
     <Header />
     <RouterProvider router={routes} />
    </>
  )
}

export default App
