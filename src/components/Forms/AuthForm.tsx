import { AiOutlineArrowRight } from 'react-icons/ai'

import * as S from './styles'

export const AuthForm = () => {
  return (
    <S.Container>
      <S.Title>Authentication</S.Title>
      <S.Form>
        <S.InputGroup>
          <S.Input type='email' placeholder='E-mail' required />
        </S.InputGroup>
        <S.InputGroup>
          <S.Input type='password' placeholder='Password' required />
        </S.InputGroup>
        <S.LinkForgotPassword to='/reset-password'>
          I forgot my password
        </S.LinkForgotPassword>
        <S.SubmitButton>
          Login
          <AiOutlineArrowRight />
        </S.SubmitButton>
      </S.Form>
      <S.NavigationButton to='/registration'>
        Sign Up
        <AiOutlineArrowRight />
      </S.NavigationButton>
    </S.Container>
  )
}
