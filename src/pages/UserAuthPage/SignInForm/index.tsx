import { FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { AiOutlineArrowRight } from 'react-icons/ai'
import axios from 'axios'

import * as S from '../styles'

export const SignInForm = () => {
  const navigate = useNavigate()

  useEffect(() => {
    localStorage.removeItem('token')
    localStorage.removeItem('userData')
  }, [])

  const handleUserLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const form = event.target as HTMLFormElement

    axios.post('http://127.0.0.1:3333/login', {
      email: form.email.value.trim(),
      password: form.password.value.trim(),
    }).then(({ data }) => {
      localStorage.setItem('userData', JSON.stringify(data.user))
      localStorage.setItem('token', data.token.token)

      navigate('/dashboard')
    })
  }

  return (
    <>
      <S.H2>Authentication</S.H2>
      <S.Form onSubmit={handleUserLogin}>
        <S.InputGroup>
          <S.Input type='email' placeholder='Email' name='email' />
          {true && <S.ErrorMessage>...</S.ErrorMessage>}
        </S.InputGroup>
        <S.InputGroup>
          <S.Input type='password' placeholder='Password' name='password' />
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
