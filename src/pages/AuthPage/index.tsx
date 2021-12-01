import { Banner } from 'components/Banner'
import { AuthForm } from 'components/Forms/AuthForm'

import * as S from './styles'

export const AuthPage = () => {
  return (
    <S.Container>
      <Banner />
      <AuthForm />
    </S.Container>
  )
}
