import styled from 'styled-components'

export const Container = styled.ul`
  max-height: 30rem;
  padding-right: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1.875rem;
  list-style: none;
  overflow: auto;

  ::-webkit-scrollbar {
    width: 0.7rem; /* width of the entire scrollbar */
  }

  ::-webkit-scrollbar-track {
    background: #E2E2E2; /* color of the tracking area */
  }

  ::-webkit-scrollbar-thumb {
    background-color: #7F3992; /* color of the scroll thumb */
    border-radius: 20px; /* roundness of the scroll thumb */
  }
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
    background-color: #7f3992;
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

export const GameType = styled.p`
  font-weight: bold;
  font-style: italic;
  font-size: 1.25rem;
  color: #7f3992;
`
