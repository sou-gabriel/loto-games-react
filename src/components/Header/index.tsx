import { useDispatch } from 'react-redux'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { useMatch, useNavigate } from 'react-router-dom'

import { createActionToRemoveUser } from 'store'

import { getUserToken } from 'shared/utils/functions'

import {
  Container,
  InnerContainer,
  Title,
  Nav,
  ListOfLinks,
  ListItem,
  NavigationLink,
  LogoutButton,
} from './styles'

export const Header = () => {
  const match = useMatch('/home')
  const isTheHomePage = Boolean(match)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleLogoutButtonClick = () => {
    const token = getUserToken() || ''

    dispatch(createActionToRemoveUser(token))
    localStorage.removeItem('token')
    navigate('/login')
  }

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
              <LogoutButton onClick={handleLogoutButtonClick}>
                Logout <AiOutlineArrowRight />
              </LogoutButton>
            </ListItem>
          </ListOfLinks>
        </Nav>
      </InnerContainer>
    </Container>
  )
}
