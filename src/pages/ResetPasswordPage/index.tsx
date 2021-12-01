import { Banner } from 'components/Banner'
import { ResetPasswordForm } from 'components/Forms'

import * as S from './styles'

export const ResetPasswordPage = () => {
  return (
    <S.Container>
      <Banner />
      <ResetPasswordForm />
    </S.Container>
  )
}
