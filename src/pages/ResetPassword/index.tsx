import { useNavigate } from 'react-router-dom'

import { Wrapper } from 'components/Wrapper'
import { Banner } from 'components/Banner'
import { Form } from 'components/Form'

import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'

import { Content, Flex, Title, Input, SubmitButton, BackButton } from './styles'

export const ResetPassword = () => {
  const navigate = useNavigate()

  return (
    <Wrapper>
      <Content>
        <Banner />

        <Flex>
          <Title>Reset password</Title>
          <Form>
            <Input type='email' placeholder='E-mail' />
            <SubmitButton>
              Send Link
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
