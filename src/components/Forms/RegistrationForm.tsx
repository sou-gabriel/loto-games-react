import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'

import * as S from './styles'

export const RegistrationForm = () => {
  return (
    <S.Container>
      <S.Title>Authentication</S.Title>
      <S.Form>
        <S.InputGroup>
          <S.Input type='text' placeholder='Name' required />
        </S.InputGroup>
        <S.InputGroup>
          <S.Input type='email' placeholder='E-mail' required />
        </S.InputGroup>
        <S.InputGroup>
          <S.Input type='password' placeholder='Password' required />
        </S.InputGroup>
        <S.SubmitButton>
          Register
          <AiOutlineArrowRight />
        </S.SubmitButton>
      </S.Form>
      <S.NavigationButton to='/registration'>
        <AiOutlineArrowLeft />
        Back
      </S.NavigationButton>
    </S.Container>
  )
}
