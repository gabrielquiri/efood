import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import HomePage from './pages/Home'
import ErrorPage from './pages/ErrorPage'

import GlobalStyle from './style'

const routes = [
  { 
    path: '/',
    element: <HomePage />,
    errorElement: <ErrorPage />
  },
]

const router = createBrowserRouter(routes,{
  basename: '/'
})

function App() {
  return (
    <div>
      <GlobalStyle />
      <RouterProvider router={router} />
    </div>
  )
}

export default App
