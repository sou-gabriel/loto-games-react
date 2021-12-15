import { useState, FormEvent, ChangeEvent } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AiOutlineArrowLeft } from 'react-icons/ai'

import { changePassword } from 'shared/services'

import {
  Title,
  Form,
  InputGroup,
  Input,
  SubmitButton,
  NavigationLink,
  ErrorMessage,
} from './styles'

interface IError {
  password: string
}

export const ResetPasswordForm = () => {
  const [errors, setErrors] = useState<IError>({} as IError)
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const { token } = useParams()

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    const passwordInputValue = (event.target as HTMLInputElement).value.trim()

    setPassword(passwordInputValue)

    if (passwordInputValue.length === 0) {
      setErrors(oldErrors => ({
        ...oldErrors,
        password: 'Você precisa informar uma senha',
      }))
      return
    }

    if (passwordInputValue.length < 3) {
      setErrors(oldErrors => ({
        ...oldErrors,
        password: 'Sua senha deve possuir mais de 3 caracteres',
      }))
      return
    }

    setErrors(oldErrors => ({
      ...oldErrors,
      password: '',
    }))
  }

  const handleSubmissionOfChangePasswordForm = async (
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault()

    const form = event.target as HTMLFormElement

    await changePassword(token || null, {
      password: form.password.value.trim(),
    })
    navigate('/login')
  }

  return (
    <>
      <Title>Reset password</Title>
      <Form onSubmit={handleSubmissionOfChangePasswordForm}>
        <InputGroup>
          <Input
            type='password'
            placeholder='Password'
            name='password'
            value={password}
            onChange={handlePasswordChange}
          />
          {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
        </InputGroup>
        <SubmitButton type='submit'>
          Reset Password
        </SubmitButton>
      </Form>
      <NavigationLink to='/'>
        <AiOutlineArrowLeft /> Back
      </NavigationLink>
    </>
  )
}
