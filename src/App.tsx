import { Routes, Route } from 'react-router-dom'

import { Footer } from 'components/Footer'

import { Login } from 'pages/Login'
import { ResetPassword } from 'pages/ResetPassword'
import { Registration } from 'pages/Registration'
import { Game } from 'pages/Game' // Essa rota deve ser privada!

export const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/reset-password' element={<ResetPassword />} />
        <Route path='/registration' element={<Registration />} />
        <Route path='/game' element={<Game />}>
          <Route path='/game/:gameType' />
        </Route>
      </Routes>

      <Footer />
    </>
  )
}
