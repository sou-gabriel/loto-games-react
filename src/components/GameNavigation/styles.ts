import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(117px, 1fr));
  gap: 1rem 1.5625rem;
`

interface INavLink {
  themeColor: string
}

export const NavigationLink = styled(NavLink)<INavLink>`
  flex-shrink: 0;
  padding: 0.5625rem 1.6875rem;
  border: 2px solid ${({ themeColor }) => themeColor};
  border-radius: 999px;
  font-weight: bold;
  font-style: italic;
  font-size: 0.875rem;
  text-align: center;
  white-space: nowrap;
  color: ${({ themeColor }) => themeColor};
  background-color: transparent;
`
