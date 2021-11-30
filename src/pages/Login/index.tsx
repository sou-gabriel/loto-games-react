import { Wrapper } from 'components/Wrapper'
import { Banner } from 'components/Banner'
import { Form } from 'components/Form'

import { AiOutlineArrowRight } from 'react-icons/ai'

import {
  Content,
  Flex,
  Title,
  Input,
  LinkForgotPassword,
  SubmitButton,
  LinkSignUp,
} from './styles'

export const Login = () => {
  return (
    <Wrapper>
      <Content>
        <Banner />

        <Flex>
          <Title>Authentication</Title>
          <Form>
            <Input type='text' placeholder='Name' />
            <Input type='email' placeholder='E-mail' />
            <Input type='password' placeholder='Password' />
            <LinkForgotPassword to='/reset-password'>
              I forget my password
            </LinkForgotPassword>
            <SubmitButton type='submit'>
              Login
              <AiOutlineArrowRight />
            </SubmitButton>
          </Form>
          <LinkSignUp to='/registration'>
            Sign Up
            <AiOutlineArrowRight />
          </LinkSignUp>
        </Flex>
      </Content>
    </Wrapper>
  )
}
