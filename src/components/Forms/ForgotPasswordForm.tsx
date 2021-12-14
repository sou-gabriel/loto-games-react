import { FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'

import { resetPassword } from 'shared/services'

import {
  Title,
  Form,
  InputGroup,
  Input,
  SubmitButton,
  NavigationLink,
} from './styles'

export const ForgotPasswordForm = () => {
  const navigate = useNavigate()

  const handlePasswordResetFormSubmission = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const form = event.target as HTMLFormElement
    const data = await resetPassword({ email: form.email.value.trim() })

    if (data) {
      const token = data
      navigate(`/reset/${token}`)
    }
  }

  return (
    <>
      <Title>Forgot Password</Title>
      <Form onSubmit={handlePasswordResetFormSubmission}>
        <InputGroup>
          <Input type='email' placeholder='Email' name='email' />
        </InputGroup>
        <SubmitButton type='submit'>
          Submit <AiOutlineArrowRight />
        </SubmitButton>
      </Form>
      <NavigationLink to='/'>
        <AiOutlineArrowLeft /> Back
      </NavigationLink>
    </>
  )
}
