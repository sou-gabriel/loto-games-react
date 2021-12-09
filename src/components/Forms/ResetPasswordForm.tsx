import { FormEvent } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import axios from 'axios'

import {
  Title,
  Form,
  InputGroup,
  Input,
  SubmitButton,
  NavigationLink,
} from './styles'

export const ResetPasswordForm = () => {
  const navigate = useNavigate()
  const { token } = useParams()

  const handleSubmissionOfChangePasswordForm = (
    event: FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault()

    const userData = {
      password: (event.target as HTMLFormElement).password.value.trim(),
    }

    axios
      .post(`http://127.0.0.1:3333/reset/${token}`, userData)
      .then(() => {
        navigate('/login')
      })
  }

  return (
    <>
      <Title>Reset password</Title>
      <Form onSubmit={handleSubmissionOfChangePasswordForm}>
        <InputGroup>
          <Input type='password' placeholder='Password' name='password' />
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
