import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'

import {
  Title,
  Form,
  InputGroup,
  Input,
  SubmitButton,
  NavigationLink,
} from './styles'

export const ResetPasswordForm = () => {
  return (
    <>
      <Title>Reset password</Title>
      <Form>
        <InputGroup>
          <Input type='email' placeholder='Email' />
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
