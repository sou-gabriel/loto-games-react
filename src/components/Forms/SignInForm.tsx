import { FormEvent, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { Toaster } from 'react-hot-toast'

import { createActionThatAddsNewUser } from 'store'

import { login } from 'shared/services'

import {
  Title,
  Form,
  InputGroup,
  Input,
  LinkForgotPassword,
  SubmitButton,
  NavigationLink,
} from './styles'

interface IUserData {
  email: string
  password: string
}

export const SignInForm = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const storeUserData = useCallback((token: string, userData: IUserData) => {
    localStorage.setItem('token', token)
    dispatch(createActionThatAddsNewUser(userData))
  }, [dispatch])

  const handleUserLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const form = event.target as HTMLFormElement

    const data = await login({
      email: form.email.value.trim(),
      password: form.password.value.trim(),
    })

    if (data) {
      storeUserData(data.token, data.data)
      navigate('/home')
    }
  }

  return (
    <>
      <Toaster />
      <Title>Authentication</Title>
      <Form onSubmit={handleUserLogin}>
        <InputGroup>
          <Input type='email' placeholder='Email' name='email' />
        </InputGroup>
        <InputGroup>
          <Input type='password' placeholder='Password' name='password' />
        </InputGroup>
        <LinkForgotPassword to='/forgot'>
          I forgot my password
        </LinkForgotPassword>
        <SubmitButton type='submit'>
          Login <AiOutlineArrowRight />
        </SubmitButton>
      </Form>
      <NavigationLink to='/sign-up'>
        Sign Up <AiOutlineArrowRight />
      </NavigationLink>
    </>
  )
}
