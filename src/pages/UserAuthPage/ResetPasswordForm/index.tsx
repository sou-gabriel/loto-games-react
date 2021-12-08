import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'

import {
  Subtitle,
  Form,
  InputGroup,
  Input,
  SubmitButton,
  NavigationLink,
} from '../styles'

export const ResetPasswordForm = () => {
  return (
    <>
      <Subtitle>Reset password</Subtitle>
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
