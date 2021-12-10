import styled from 'styled-components'

interface ITheme {
  theme: string
}

export const Container = styled.ul<ITheme>`
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
    border-radius: 20px;
    background: #E2E2E2; /* color of the tracking area */
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme}; /* color of the scroll thumb */
    border-radius: 20px; /* roundness of the scroll thumb */
  }
`

export const ListItem = styled.li`
  display: flex;
  gap: 0.9375rem;
`

export const VerticalLine = styled.span<ITheme>`
  display: inline-block;
  width: 6px;
  min-height: 100%;
  border-radius: 999px;
  background-color: ${({ theme }) => theme};
`

export const ChoosenNumbers = styled.strong`
  display: block;
  margin-bottom: 0.9375rem;
  font-style: italic;
  font-size: 1.25rem;
  color: #868686;
  word-break: break-all;
`

export const PurchaseRecord = styled.p`
  margin-bottom: 0.6875rem;
  font-size: 1.0625rem;
  color: #868686;
`

export const GameType = styled.p<ITheme>`
  font-weight: bold;
  font-style: italic;
  font-size: 1.25rem;
  color: ${({ theme }) => theme};
`
