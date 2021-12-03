import { Routes, Route } from 'react-router-dom'

import { UserAuthPage } from 'pages/UserAuthPage'
import { Home } from 'pages/Home'
import { Dashboard } from 'pages/Dashboard'

import { Footer } from 'components/Footer'

export const App = () => {
  return (
    <>
      <Routes>
        <Route path='/*' element={<UserAuthPage />} />
        <Route
          path='/home/*'
          element={true ? <Home /> : <h1>O usuário não está autenticado!</h1>}
        />
        <Route
          path='/dashboard'
          element={
            true ? <Dashboard /> : <h1>O usuário não está autenticado!</h1>
          }
        />
      </Routes>
      <Footer />
    </>
  )
}
