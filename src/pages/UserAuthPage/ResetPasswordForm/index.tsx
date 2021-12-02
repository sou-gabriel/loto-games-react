import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'

import * as S from '../styles'

export const ResetPasswordForm = () => {
  return (
    <>
      <S.H2>Reset password</S.H2>
      <S.Form>
        <S.InputGroup>
          <S.Input type='email' placeholder='Email' />
          {true && <S.ErrorMessage>...</S.ErrorMessage>}
        </S.InputGroup>
        <S.SubmitButton type='submit'>
          Register
          <AiOutlineArrowRight />
        </S.SubmitButton>
      </S.Form>
      <S.NavigationButton to='/'>
        <AiOutlineArrowLeft />
        Back
      </S.NavigationButton>
    </>
  )
}
