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
  const [escola, setEscola] = useState<number | undefined>()
  const [nomeEscola, setNomeEscola] = useState<string>('')

  const onPress = (cod: number) => {
    setEscola(cod)
  }

  const defNomeEscola = (nome: string) => {
    setNomeEscola(nome)
  }

  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Home onPress={onPress} defNomeEscola={defNomeEscola}  />
    },
    {
      path: '/escola/:id',
      element: <Escola cod={escola} />
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
