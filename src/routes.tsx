import { Routes, Route } from "react-router-dom";

import HomePage from './pages/Home'
import PerfilPage from './pages/Perfil'
import ErrorPage from './pages/ErrorPage'

const Router = () => (
  <Routes>
    <Route path="/" element={<HomePage />} errorElement={<ErrorPage />}/>
    <Route path="/restaurant/:id" element={<PerfilPage />} errorElement={<ErrorPage />}/>
  </Routes>
)

export default Router