import styled from 'styled-components'
import { IoTrashOutline } from 'react-icons/io5'

export const Container = styled.ul`
  max-height: 20.125rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  overflow: auto;

  ::-webkit-scrollbar {
    width: 0.7rem; /* width of the entire scrollbar */
  }

  ::-webkit-scrollbar-track {
    border-radius: 20px;
    background: #E2E2E2; /* color of the tracking area */
  }

  ::-webkit-scrollbar-thumb {
    background-color: #b5c401; /* color of the scroll thumb */
    border-radius: 20px; /* roundness of the scroll thumb */
  }
`

interface IUserGameItemProps {
  theme: string
}

export const UserGameItem = styled.li<IUserGameItemProps>`
  display: flex;
  height: 5.375rem;
  color: ${({ theme }) => theme};
  border-color: ${({ theme }) => theme};
`

export const TrashIcon = styled(IoTrashOutline)`
  align-self: center;
  margin-right: 0.9rem;
  cursor: pointer;
  font-size: 2.5rem;
`

export const VerticalLine = styled.span<IUserGameItemProps>`
  display: inline-block;
  width: 7px;
  height: 100%;
  border-radius: 100px 0 0 100px;
  background-color: ${({ theme }) => theme};
`

export const Heading = styled.div`
  width: 100%;
  padding: 0.75rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  > div {

    > strong:first-of-type {

    }
    > strong:last-of-type {
      display: block;
      margin-bottom: 0.375rem;
      font-size: 0.9375rem;
      font-style: italic;
      line-height: 1.25rem;
      color: #868686;
    }
    > p {

    }
  }
`

export const BetNumbers = styled.strong`
  font-style: italic;
  color: #868686;
`

export const BetDice = styled.p<IUserGameItemProps>`
  font-size: 1rem;
  color: ${({ theme }) => theme};
  display: flex;
  gap: 0.875rem;
  color: #868686;
`

export const GameName = styled.strong<IUserGameItemProps>`
  font-style: italic;
  color: ${({ theme }) => theme};
`
