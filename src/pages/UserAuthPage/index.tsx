import { Routes, Route } from 'react-router-dom'

import { SignInForm, SignUpForm, ResetPasswordForm } from 'components/Forms'
import { MainContent } from 'components/MainContent'
import { Container, Section, Title, AuthContainer } from './styles'

export const UserAuthPage = () => {
  return (
    <Container>
      <MainContent>
        <Section>
          <Title>
            The <br /> Greatest <br /> App <br /> <span>for</span> <br />{' '}
            <span>lottery</span>
          </Title>
          <AuthContainer>
            <Routes>
              <Route path="/" element={<SignInForm />} />
              <Route path="/login" element={<SignInForm />} />
              <Route path="/reset-password" element={<ResetPasswordForm />} />
              <Route path="/sign-up" element={<SignUpForm />} />
            </Routes>
          </AuthContainer>
        </Section>
      </MainContent>
    </Container>
  )
}
