import { useNavigate, Link } from 'react-router-dom'
import { AiOutlineArrowRight } from 'react-icons/ai'

import { Banner } from 'components/Banner'
import { Input } from 'components/Input'
import { Button } from 'components/Button'

import { Container, Content } from './styles'

export const Authentication = () => {
  const navigate = useNavigate()

  const goToRegistrationPage = () => {
    navigate('/register')
  }

  return (
    <Container>
      <Banner />

      <Content>
        <h2>Authentication</h2>
        <form>
          <Input type='text' placeholder='E-mail' required aria-required />
          <Input
            type='password'
            placeholder='Password'
            required
            aria-required
          />
          <Link to='/reset-password'>I forgot my password</Link>
          <Button type='submit' color='#B5C401'>
            Login
            <AiOutlineArrowRight />
          </Button>
        </form>
        <Button color='#707070' type='button' onClick={goToRegistrationPage}>
          Sign Up
          <AiOutlineArrowRight />
        </Button>
      </Content>
    </Container>
  )
}
