import { FormEvent } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AiOutlineArrowLeft } from 'react-icons/ai'

import { changePassword } from 'shared/services'

import { useFormValidation } from 'hooks'

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

const validateUserPassword = (values: any) => {
  const errors: IValues = {}

  if (values.password.length < 8) {
    errors.password = 'Please, insert a valid password'
  }

  return errors
}

export const ResetPasswordForm = () => {
  const navigate = useNavigate()
  const { token } = useParams()
  const { values, handleChange, errors } = useFormValidation({
    initialValues: {
      password: '123456789',
    },
    validate: validateUserPassword,
  })

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
            value={values.password}
            onChange={handleChange}
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
