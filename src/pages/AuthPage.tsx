import { Wrapper } from 'components/Wrapper'
import { Banner } from 'components/Banner'
import { AuthForm } from 'components/Forms/AuthForm'

export const AuthPage = () => {
  return (
    <Wrapper>
      <Banner />
      <AuthForm />
    </Wrapper>
  )
}
