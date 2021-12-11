import { Routes, Route } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

import {
  SignInForm,
  SignUpForm,
  ForgotPasswordForm,
  ResetPasswordForm,
} from 'components/Forms'
import { MainContent } from 'components/MainContent'
import { Container, Title, AuthContainer } from './styles'

export const UserAuthPage = () => {
  return (
    <>
      <Toaster />
      <MainContent>
        <Container>
          <Title>
            The <br /> Greatest <br /> App <br /> <span>for</span> <br />{' '}
            <span>lottery</span>
          </Title>
          <AuthContainer>
            <Routes>
              <Route path='/' element={<SignInForm />} />
              <Route path='/login' element={<SignInForm />} />
              <Route path='/forgot' element={<ForgotPasswordForm />} />
              <Route path='/reset/:token' element={<ResetPasswordForm />} />
              <Route path='/sign-up' element={<SignUpForm />} />
            </Routes>
          </AuthContainer>
        </Container>
      </MainContent>
    </>
  )
}
