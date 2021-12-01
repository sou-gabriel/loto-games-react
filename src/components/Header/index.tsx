import { useLocation } from 'react-router-dom'
import { AiOutlineArrowRight } from 'react-icons/ai'

import {
  Container,
  Row,
  Logo,
  Navigation,
  List,
  ListItem,
  NavigationLink,
} from './styles'

export const Header = () => {
  const { pathname } = useLocation()

  return (
    <Container>
      <Row>
        <Logo>TGL</Logo>

        <Navigation>
          <List>
            {pathname === '/dashboard' || (
              <ListItem style={{ marginRight: 'auto' }}>
                <NavigationLink to='/'>Home</NavigationLink>
              </ListItem>
            )}
            <ListItem>
              <NavigationLink to='/'>Account</NavigationLink>
            </ListItem>
            <ListItem>
              <NavigationLink to='/'>
                Exit
                <AiOutlineArrowRight />
              </NavigationLink>
            </ListItem>
          </List>
        </Navigation>
      </Row>
    </Container>
  )
}
