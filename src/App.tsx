import { Routes, Route } from 'react-router-dom'

import { AuthPage } from 'pages/AuthPage'
import { ResetPasswordPage } from 'pages/ResetPasswordPage'
import { RegistrationPage } from 'pages/RegistrationPage'
import { DashboardPage } from 'pages/DashboardPage'
import { BetPage } from 'pages/BetPage'

import { Footer } from 'components/Footer'

export const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<AuthPage />} />
        <Route path='/reset-password' element={<ResetPasswordPage />} />
        <Route path='/registration' element={<RegistrationPage />} />
        <Route path='/dashboard' element={<DashboardPage />} />
        <Route path='/new-bet' element={<BetPage />}>
          <Route path='/new-bet/:gameType' element={<BetPage />} />
        </Route>
      </Routes>

      <Footer />
    </>
  )
}
