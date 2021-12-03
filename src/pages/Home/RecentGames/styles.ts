import styled from 'styled-components'

import { NavLink } from 'react-router-dom'

export const Container = styled.section`
  flex-grow: 0.5;
`

export const Header = styled.header`
  margin-bottom: 2.1875rem;

  display: flex;
  align-items: center;
  gap: 2.8125rem;

  @media (max-width: 876px) {
    flex-direction: column;
    gap: 1rem;
  }
`

export const FiltersContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.9375rem;

  @media (max-width: 876px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const H2 = styled.h2`
  font-size: 1.5rem;
  font-style: italic;
  color: #707070;
  text-transform: uppercase;
`

export const Strong = styled.strong`
  font-size: 1.0625rem;
  font-style: italic;
  color: #868686;
`

export const NavigationContainer = styled.div`
  display: flex;
  gap: 1.5625rem;
  align-items: center;
`

export const GameNavigationLink = styled(NavLink)`
  padding: 0.5625rem 1.6875rem;
  border: 2px solid #7f3992;
  border-radius: 999px;

  font-weight: bold;
  font-style: italic;
  font-size: 0.875rem;
  color: #7f3992;

  background-color: #fff;
`
