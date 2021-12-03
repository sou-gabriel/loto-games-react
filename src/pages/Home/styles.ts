import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4rem;

  @media (max-width: 588px) {
    flex-direction: column-reverse;
    align-content: center;
    gap: 2rem;
  }
`

export const NavigationButton = styled(Link)`
  font-weight: bold;
  font-style: italic;
  font-size: 1.75rem;
  color: #b5c401;

  display: flex;
  align-items: center;
  gap: 0.6875rem;
  align-self: flex-start;

  @media (max-width: 588px) {
    align-self: center;
  }
`
