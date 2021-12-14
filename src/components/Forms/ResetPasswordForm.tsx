import { FormEvent } from 'react'
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
} from './styles'

export const ResetPasswordForm = () => {
  const navigate = useNavigate()
  const { token } = useParams()

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
