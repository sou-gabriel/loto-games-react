import { useState, FormEvent, ChangeEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Toaster } from 'react-hot-toast'
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'

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

interface IErrors {
  username?: string
  email?: string
  password?: string
}

export const SignUpForm = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState<IErrors>({} as IErrors)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleUserRegistration = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const form = event.target as HTMLFormElement

    registerUser({
      name: form.username.value.trim(),
      email: form.email.value.trim(),
      password: form.password.value.trim(),
    }).then((data) => {
      if (data) {
        localStorage.setItem('token', data.token)
        dispatch(createActionThatAddsNewUser(data.userData))
        navigate('/home')
      }
    })
  }

  const handleUsername = (event: ChangeEvent<HTMLInputElement>) => {
    const usernameInputValue = (event.target as HTMLInputElement).value

    setUsername(usernameInputValue)

    if (usernameInputValue.length === 0) {
      setErrors((oldErrors) => ({
        ...oldErrors,
        username: 'O nome do usuário não pode estar vazio',
      }))
      return
    }

    if (usernameInputValue.length < 3) {
      setErrors((oldErrors) => ({
        ...oldErrors,
        username: 'O nome precisa de pelo menos 3 caracteres',
      }))
      return
    }

    setErrors((oldErrors) => ({
      ...oldErrors,
      username: '',
    }))
  }

  const handleEmail = (event: ChangeEvent<HTMLInputElement>) => {
    const emailInputValue = (event.target as HTMLInputElement).value.trim()

    setEmail(emailInputValue)

    if (emailInputValue.length === 0) {
      setErrors((oldErrors) => ({
        ...oldErrors,
        email: 'O e-mail não pode ficar vazio',
      }))
      return
    }

    setErrors(oldErrors => ({
      ...oldErrors,
      email: ''
    }))
  }

  const handlePassword = (event: ChangeEvent<HTMLInputElement>) => {
    const passwordInputValue = (event.target as HTMLInputElement).value.trim()

    setPassword(passwordInputValue)

    if (passwordInputValue.length === 0) {
      setErrors((oldErrors) => ({
        ...oldErrors,
        password: 'Você precisa informar uma senha',
      }))
      return
    }

    if (passwordInputValue.length < 3) {
      setErrors((oldErrors) => ({
        ...oldErrors,
        password: 'Sua senha deve possuir mais de 3 caracteres',
      }))
      return
    }

    setErrors((oldErrors) => ({
      ...oldErrors,
      password: '',
    }))
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
            value={username}
            onChange={handleUsername}
            onFocus={handleUsername}
          />
          {errors.username && <ErrorMessage>{errors.username}</ErrorMessage>}
        </InputGroup>
        <InputGroup>
          <Input
            type='email'
            placeholder='Email'
            name='email'
            value={email}
            onChange={handleEmail}
            onFocus={handleEmail}
          />
          {errors.email && <ErrorMessage>{errors.email}</ErrorMessage>}
        </InputGroup>
        <InputGroup>
          <Input
            type='password'
            placeholder='Password'
            name='password'
            value={password}
            onChange={handlePassword}
            onFocus={handlePassword}
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
