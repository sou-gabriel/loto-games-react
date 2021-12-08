import { Routes, Route } from 'react-router-dom'

import { SignInForm } from './SignInForm'
import { ResetPasswordForm } from './ResetPasswordForm'
import { SignUpForm } from './SignUpForm'
import { MainContent } from 'components/MainContent'
import { Container, Title, AuthContainer } from './styles'

export const UserAuthPage = () => {
  return (
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
            <Route path='/reset-password' element={<ResetPasswordForm />} />
            <Route path='/sign-up' element={<SignUpForm />} />
          </Routes>
        </AuthContainer>
      </Container>
    </MainContent>
  )
}
