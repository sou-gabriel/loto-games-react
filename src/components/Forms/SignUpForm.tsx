import { FormEvent } from 'react'
import { Toaster } from 'react-hot-toast'
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'

import { useAuth } from 'hooks/useAuth'
import {
  Title,
  Form,
  InputGroup,
  Input,
  SubmitButton,
  NavigationLink
} from './styles'

export const SignUpForm = () => {
  const { fetchUser, clearFormFields } = useAuth()

  const handleUserRegistration = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const form = event.target as HTMLFormElement

    fetchUser('http://127.0.0.1:3333/user/create', {
      name: form.username.value.trim(),
      email: form.email.value.trim(),
      password: form.password.value.trim()
    })

    clearFormFields([
      form.username,
      form.email,
      form.password
    ])
  }

  return (
    <>
      <Toaster />
      <Title>Registration</Title>
      <Form onSubmit={handleUserRegistration}>
        <InputGroup>
          <Input type='text' placeholder='Name' name='username' required />
        </InputGroup>
        <InputGroup>
          <Input type='email' placeholder='Email' name='email' required />
        </InputGroup>
        <InputGroup>
          <Input
            type='password'
            placeholder='Password'
            name='password'
            required
          />
        </InputGroup>
        <SubmitButton type='submit'>
          Register <AiOutlineArrowRight />
        </SubmitButton>
      </Form>
      <NavigationLink to='/'>
        <AiOutlineArrowLeft /> Back
      </NavigationLink>
    </>
  )
}
