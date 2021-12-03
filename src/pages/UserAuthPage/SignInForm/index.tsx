import { AiOutlineArrowRight } from 'react-icons/ai'

import * as S from '../styles'

export const SignInForm = () => {
  return (
    <>
      <S.H2>Authentication</S.H2>
      <S.Form>
        <S.InputGroup>
          <S.Input type='email' placeholder='Email' />
          {true && <S.ErrorMessage>...</S.ErrorMessage>}
        </S.InputGroup>
        <S.InputGroup>
          <S.Input type='password' placeholder='Password' />
          {false && <S.ErrorMessage>...</S.ErrorMessage>}
        </S.InputGroup>
        <S.SubmitButton type='submit'>
          Login
          <AiOutlineArrowRight />
        </S.SubmitButton>
      </S.Form>
      <S.NavigationButton to='/'>
        Sign Up
        <AiOutlineArrowRight />
      </S.NavigationButton>
    </>
  )
}
