import { Routes, Route } from 'react-router-dom'

import { UserAuthPage } from 'pages/UserAuthPage'

import * as S from './styles'

export const ContentRoutes = () => {
  return (
    <S.Container>
      <Routes>
        <Route path='/*' element={<UserAuthPage />} />
      </Routes>
    </S.Container>
  )
}
