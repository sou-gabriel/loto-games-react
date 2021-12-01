import styled from 'styled-components'

export const Container = styled.ul`
  max-height: 21.37rem;
  display: flex;
  flex-direction: column;
  gap: 1.875rem;
  list-style: none;
  overflow: auto;
`

export const ListItem = styled.li`
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

export const GameNumbers = styled.strong`
  display: block;
  margin-bottom: 0.9375rem;
  font-style: italic;
  font-size: 1.25rem;
  color: #868686;
`

export const GameDice = styled.p`
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
