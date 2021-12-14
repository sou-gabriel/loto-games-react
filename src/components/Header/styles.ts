import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.header`
  padding: 0.9375rem 1rem 0;
  border-bottom: 2px solid #EBEBEB;
`

export const InnerContainer = styled.div`
  width: 100%;
  max-width: 1020px;
  margin: 0 auto;
  display: flex;
  align-items: center;

  @media (max-width: 470px) {
    flex-direction: column;
  }
`

export const Title = styled.h1`
  font-size: 2.75rem;
  font-style: italic;
  line-height: 4.375rem;
  color: #707070;
  text-align: center;

  &:after {
    content: "";
    display: block;
    width: 6.6875rem;
    height: 0.4375rem;
    border-radius: 6px;
    background-color: #b5c401;
    transform: translateY(50%);
  }
`

export const Nav = styled.nav`
  width: 100%;
  height: 100%;
  padding-left: 4rem;

  @media (max-width: 470px) {
    padding-left: 0;
    margin: 1.2rem 0;
  }
`

export const ListOfLinks = styled.ul`
  display: flex;
  justify-content: flex-end;
  gap: 2.5rem;
  list-style: none;
  font-weight: bold;
  font-style: italic;
  font-size: 1.25rem;
  color: #707070;

  @media (max-width: 470px) {
    justify-content: center;
  }
`

interface ListItemProps {
  isTheHomeLink?: boolean
}

export const ListItem = styled.li<ListItemProps>`
  margin-right: ${({ isTheHomeLink }) => isTheHomeLink ? 'auto' : '2.5rem'};

  &:last-of-type {
    margin-right: 0;
  }

  @media (max-width: 470px) {
    margin-right: 0;
  }
`

export const NavigationLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.625rem;
`

export const LogoutButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.625rem;

  list-style: none;
  font-weight: bold;
  font-style: italic;
  font-size: 1.25rem;
  color: #707070;
  background: transparent;
`
