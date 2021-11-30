import { useNavigate } from 'react-router-dom'

import { Wrapper } from 'components/Wrapper'
import { Banner } from 'components/Banner'
import { Form } from 'components/Form'

import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'

import { Content, Flex, Title, Input, SubmitButton, BackButton } from './styles'

export const Registration = () => {
  const navigate = useNavigate(-1)

  return (
    <Wrapper>
      <Content>
        <Banner />

        <Flex>
          <Title>Registration</Title>
          <Form>
            <Input type='text' placeholder='Name' />
            <Input type='email' placeholder='E-mail' />
            <Input type='password' placeholder='Password' />
            <SubmitButton>
              Register
              <AiOutlineArrowRight />
            </SubmitButton>
          </Form>
          <BackButton onClick={() => navigate(-1)}>
            <AiOutlineArrowLeft />
            Back
          </BackButton>
        </Flex>
      </Content>
    </Wrapper>
  )
}
