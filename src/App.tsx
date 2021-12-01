import { Routes, Route } from 'react-router-dom'

import { AuthPage } from 'pages/AuthPage'
import { ResetPasswordPage } from 'pages/ResetPasswordPage'
import { RegistrationPage } from 'pages/RegistrationPage'
import { Dashboard } from 'pages/Dashboard'
import { NewBet } from 'pages/NewBet'

import { Footer } from 'components/Footer'

export const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<AuthPage />} />
        <Route path='/reset-password' element={<ResetPasswordPage />} />
        <Route path='/register' element={<RegistrationPage />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/new-bet' element={<NewBet />} />
      </Routes>

      <Footer />
    </>
  )
}
