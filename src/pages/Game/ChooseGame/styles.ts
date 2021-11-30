import styled from 'styled-components'

import { NavLink } from 'react-router-dom'

type GameButtonProps = {
  color: string
}

export const Title = styled.h2`
  margin-bottom: 1.25rem;

  font-weight: bold;
  font-size: 1.0625rem;
  font-style: italic;
  color: #868686;
`

export const Actions = styled.div`
  display: flex;
  gap: 1.5625rem;
`

export const GameButton = styled(NavLink)<GameButtonProps>`
  padding: 0.5625rem 1.6875rem;

  border: 2px solid ${props => props.color};
  border-radius: 999px;

  font-weight: bold;
  font-size: 0.875rem;
  font-style: italic;
  color: ${props => props.color};
`
