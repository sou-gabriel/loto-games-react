import { Banner } from 'components/Banner'
import { RegistrationForm } from 'components/Forms'

import * as S from './styles'

export const RegistrationPage = () => {
  return (
    <S.Container>
      <Banner />
      <RegistrationForm />
    </S.Container>
  )
}
