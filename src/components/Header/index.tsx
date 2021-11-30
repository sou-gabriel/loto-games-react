import { Link } from 'react-router-dom'

import { AiOutlineArrowRight } from 'react-icons/ai'

import { Container, Row, Logo, Navigation, LinkList } from './styles'

export const Header = () => {
  return (
    <>
      <Container>
        <Row>
          <Logo>TGL</Logo>
          <Navigation>
            <LinkList>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/'>Account</Link>
              </li>
              <li>
                <Link to='/login'>
                  Sair
                  <AiOutlineArrowRight />
                </Link>
              </li>
            </LinkList>
          </Navigation>
        </Row>
      </Container>
    </>
  )
}
