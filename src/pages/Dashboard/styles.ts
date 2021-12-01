import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const Main = styled.main`
  width: 100%;
  max-width: 1120px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.375rem;
`

export const FlexRow = styled.div`
  display: flex;
  align-items: center;
`

export const Title = styled.h2`
  font-size: 1.5rem;
  font-style: italic;
  color: #707070;
  text-transform: uppercase;
  margin-right: 2.8125rem;
`

export const ActionsTitle = styled.h3`
  margin-right: 0.9375rem;
  font-size: 1.0625rem;
  font-style: italic;
  color: #868686;
`

export const ActionsContainer = styled.div`
  display: flex;
  gap: 1.5625rem;
`

export const NewGameButton = styled(Link)`
  font-weight: bold;
  font-style: italic;
  font-size: 1.75rem;
  color: #b5c401;
  display: flex;
  align-items: center;
  gap: 0.6875rem;
`
