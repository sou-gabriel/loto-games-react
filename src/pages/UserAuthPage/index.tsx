import { Routes, Route } from 'react-router-dom'

import { SignInForm } from './SignInForm'
import { ResetPasswordForm } from './ResetPasswordForm'
import { SignUpForm } from './SignUpForm'

import * as S from './styles'

export const UserAuthPage = () => {
  return (
    <S.Container>
      <S.H1>
        The <br /> Greatest <br /> App <br /> <span>for</span> <br />{' '}
        <span>lottery</span>
      </S.H1>
      <S.Section>
        <Routes>
          <Route path='/' element={<SignInForm />} />
          <Route path='/reset-password' element={<ResetPasswordForm />} />
          <Route path='/sign-up' element={<SignUpForm />} />
        </Routes>
      </S.Section>
    </S.Container>
  )
}
