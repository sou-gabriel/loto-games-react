import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'

import * as S from './styles'

export const ResetPasswordForm = () => {
  return (
    <S.Container>
      <S.Title>Reset Password</S.Title>
      <S.Form>
        <S.InputGroup>
          <S.Input type='email' placeholder='E-mail' required />
        </S.InputGroup>
        <S.SubmitButton>
          Send Link
          <AiOutlineArrowRight />
        </S.SubmitButton>
      </S.Form>
      <S.NavigationButton to='/'>
        <AiOutlineArrowLeft />
        Back
      </S.NavigationButton>
    </S.Container>
  )
}
