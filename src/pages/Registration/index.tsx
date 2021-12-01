import { useNavigate } from 'react-router-dom'
import { AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai'

import { Banner } from 'components/Banner'
import { Input } from 'components/Input'
import { Button } from 'components/Button'

import { Container, Content } from './styles'

export const Registration = () => {
  const navigate = useNavigate()

  const goToLoginPage = () => {
    navigate('/')
  }

  return (
    <Container>
      <Banner />

      <Content>
        <h2>Registration</h2>
        <form>
          <Input type='text' placeholder='Name' required aria-required />
          <Input type='email' placeholder='E-mail' required aria-required />
          <Input
            type='password'
            placeholder='Password'
            required
            aria-required
          />
          <Button type='submit' color='#B5C401'>
            Register
            <AiOutlineArrowRight />
          </Button>
        </form>
        <Button color='#707070' type='button' onClick={goToLoginPage}>
          <AiOutlineArrowLeft />
          Back
        </Button>
      </Content>
    </Container>
  )
}
