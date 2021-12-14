import { FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'
import axios from 'axios'

import { showFeedbackMessage } from 'shared/utils/functions'

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

  const handlePasswordResetFormSubmission = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const userData = {
      email: (event.target as HTMLFormElement).email.value.trim(),
    }

    axios.post('http://127.0.0.1:3333/reset', userData)
      .then((response) => {
        const token = response.data.token
        navigate(`/reset/${token}`)
      })
      .catch(({ response }) => {
        showFeedbackMessage({
          type: 'error',
          message: response.data.message,
        })
      })
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
