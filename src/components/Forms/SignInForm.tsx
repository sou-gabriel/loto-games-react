import { FormEvent } from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { Toaster } from 'react-hot-toast'

import { useAuth } from 'hooks/useAuth'

import {
  Title,
  Form,
  InputGroup,
  Input,
  LinkForgotPassword,
  SubmitButton,
  NavigationLink
} from './styles'

export const SignInForm = () => {
  const { fetchUser, clearFormFields } = useAuth()

  const handleUserLogin = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const form = event.target as HTMLFormElement

    fetchUser('http://127.0.0.1:3333/login', {
      email: form.email.value.trim(),
      password: form.password.value.trim()
    })

    clearFormFields([form.email, form.password])
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
