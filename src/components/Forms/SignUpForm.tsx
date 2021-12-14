import { FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Toaster } from 'react-hot-toast'
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'

import { useFormValidation } from 'hooks'

import { registerUser } from 'shared/services'

import { createActionThatAddsNewUser } from 'store'

import {
  Title,
  Form,
  InputGroup,
  Input,
  SubmitButton,
  NavigationLink,
  ErrorMessage,
} from './styles'

interface IValues {
  username?: string
  email?: string
  password?: string
}

const validateSignup = (values: any) => {
  const errors: IValues = {}

  if (values.username.length < 5) {
    errors.username = 'Please, insert a valid username'
  }

  if (!values.email.includes('@')) {
    errors.email = 'Please, insert a valid email'
  }

  if (values.password.length < 8) {
    errors.password = 'Please, insert a valid password'
  }

  return errors
}

export const SignUpForm = () => {
  const { errors, values, handleChange } = useFormValidation({
    initialValues: {
      username: 'john.doe',
      email: 'email@email.com',
      password: '123456789',
    },
    validate: validateSignup,
  })
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleUserRegistration = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const form = event.target as HTMLFormElement
    const isTheUserDataIncorrect =
      !errors.username || !errors.email || !errors.password

    if (isTheUserDataIncorrect) {
      registerUser({
        name: form.username.value.trim(),
        email: form.email.value.trim(),
        password: form.password.value.trim(),
      }).then(data => {
        if (data) {
          localStorage.setItem('token', data.token)
          dispatch(createActionThatAddsNewUser(data.userData))
          navigate('/home')
        }
      })
    }
  }

  return (
    <>
      <Toaster />
      <Title>Registration</Title>
      <Form onSubmit={handleUserRegistration}>
        <InputGroup>
          <Input
            type='text'
            placeholder='Name'
            name='username'
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && <ErrorMessage>{errors.username}</ErrorMessage>}
        </InputGroup>
        <InputGroup>
          <Input
            type='email'
            placeholder='Email'
            name='email'
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
        </InputGroup>
        <InputGroup>
          <Input
            type='password'
            placeholder='Password'
            name='password'
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
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
