import axios from 'axios'
import { FormEvent } from 'react'
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'
import toast, { Toaster } from 'react-hot-toast'
import { useNavigate } from 'react-router'

import * as S from '../styles'

export const SignUpForm = () => {
  const navigate = useNavigate()

  const handleUserRegistration = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const form = event.target as HTMLFormElement

    axios
      .post('http://127.0.0.1:3333/user/create', {
        name: form.username.value,
        email: form.email.value,
        password: form.password.value,
      })
      .then(({ data }) => {
        localStorage.setItem('token', data.token.token)
        localStorage.setItem('userData', JSON.stringify(data.user))

        navigate('/dashboard', { replace: true })
      })
      .catch(({ response }) => {
        toast.error(response.data.error.message)
      })

    form.username.value = ''
    form.email.value = ''
    form.password.value = ''
  }

  return (
    <>
      <Toaster />
      <S.H2>Registration</S.H2>
      <S.Form onSubmit={handleUserRegistration}>
        <S.InputGroup>
          <S.Input type='text' placeholder='Name' name='username' required />
          {true && <S.ErrorMessage>...</S.ErrorMessage>}
        </S.InputGroup>
        <S.InputGroup>
          <S.Input type='email' placeholder='Email' name='email' required />
          {true && <S.ErrorMessage>...</S.ErrorMessage>}
        </S.InputGroup>
        <S.InputGroup>
          <S.Input
            type='password'
            placeholder='Password'
            name='password'
            required
          />
          {false && <S.ErrorMessage>...</S.ErrorMessage>}
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
