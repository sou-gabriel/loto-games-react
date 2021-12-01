import { Routes, Route } from 'react-router-dom'

import { Authentication } from 'pages/Authentication'
import { ResetPassword } from 'pages/ResetPassword'
import { Registration } from 'pages/Registration'
import { Dashboard } from 'pages/Dashboard'

import { Footer } from 'components/Footer'

export const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Authentication />} />
        <Route path='/reset-password' element={<ResetPassword />} />
        <Route path='/register' element={<Registration />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>

      <Footer />
    </>
  )
}
