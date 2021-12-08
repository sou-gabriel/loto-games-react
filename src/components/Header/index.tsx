import { AiOutlineArrowRight } from 'react-icons/ai'
import { useMatch } from 'react-router-dom'

import {
  Container,
  InnerContainer,
  Title,
  Nav,
  ListOfLinks,
  ListItem,
  NavigationLink,
} from './styles'

export const Header = () => {
  const match = useMatch('/home')
  const isTheHomePage = Boolean(match)

  return (
    <Container>
      <InnerContainer>
        <Title>TGL</Title>
        <Nav>
          <ListOfLinks>
            {!isTheHomePage && (
              <ListItem isTheHomeLink={!isTheHomePage}>
                <NavigationLink to='/home'>Home</NavigationLink>
              </ListItem>
            )}
            <ListItem>
              <NavigationLink to='/account'>Account</NavigationLink>
            </ListItem>
            <ListItem>
              <NavigationLink to='/login'>
                Logout <AiOutlineArrowRight />
              </NavigationLink>
            </ListItem>
          </ListOfLinks>
        </Nav>
      </InnerContainer>
    </Container>
  )
}
