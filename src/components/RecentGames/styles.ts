import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const TopLine = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 2.375rem;
`

export const PrimaryTitle = styled.h2`
  margin-right: 2.8125rem;
  font-size: 1.5rem;
  font-style: italic;
  color: #707070;
  text-transform: uppercase;
`

export const FilterLine = styled.div`
  display: flex;
  align-items: center;
`

export const SecondaryTitle = styled.strong`
  margin-right: 0.9375rem;
  font-size: 1.0625rem;
  font-style: italic;
  color: #868686;
`

export const ActionsList = styled.div`
  display: flex;
  gap: 1.5625rem;
  align-items: center;
`

export const RegisteredGameList = styled.ul`
  max-height: 21.37rem;
  display: flex;
  flex-direction: column;
  gap: 1.875rem;
  list-style: none;
  overflow: auto;
`

export const RegisteredGameItem = styled.li`
  height: 5.875rem;
  display: flex;
  gap: 0.9375rem;

  &:before {
    content: '';
    display: inline-block;
    width: 6px;
    height: 100%;
    border-radius: 999px;
    background-color: #7F3992;
  }
`

export const ChoosenNumbers = styled.strong`
  display: block;
  margin-bottom: 0.9375rem;
  font-style: italic;
  font-size: 1.25rem;
  color: #868686;
`

export const PurchaseRecord = styled.p`
  margin-bottom: 0.6875rem;
  font-size: 1.0625rem;
  color: #868686;
`

export const GameName = styled.p`
  font-weight: bold;
  font-style: italic;
  font-size: 1.25rem;
  color: #7F3992;
`

export const NewGameButton = styled(Link)`
  font-weight: bold;
  font-style: italic;
  font-size: 1.75rem;
  color: #b5c401;
  display: flex;
  align-items: center;
  gap: 0.6875rem;
  align-self: flex-start;
`
