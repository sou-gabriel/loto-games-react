import styled from 'styled-components'
import { IoTrashOutline } from 'react-icons/io5'

export const Container = styled.aside`
  align-self: flex-start;
  flex-shrink: 0;

  width: 19.8125rem;

  background-color: #fff;
  border: 1px solid #E2E2E2;
  border-radius: 10px;

  @media (max-width: 588px) {
    align-self: center;
    order: 2;
  }
`

export const InnerContainer = styled.div`
  padding: 2rem 1rem 2.9375rem 1.0625rem;
`

export const Title = styled.h2`
  font-style: italic;
  font-size: 1.5rem;
  line-height: 5.3125rem;
  color: #707070;
  text-transform: uppercase;
`

export const TotalPrice = styled.p`
  margin-top: 2.5rem;
  font-size: 1.5rem;
  color: #707070;
  text-transform: uppercase;

  > strong {
    font-style: italic;
  }
`

export const SaveGameButton = styled.button`
  width: 100%;
  height: 6rem;
  background-color: #f4f4f4 ;
  font-size: 2.1875rem;
  color: #27C383;
  font-weight: bold;
  font-style: italic;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.125rem;
`

export const NumbersList = styled.ul`
  max-height: 20.125rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  overflow: auto;
`

interface ListProps {
  themeColor: string
}

export const ListItem = styled.li<ListProps>`
  display: flex;
  height: 5.375rem;

  color: ${props => props.themeColor};
  border-color: ${props => props.themeColor};

  > span {
    display: inline-block;
    width: 7px;
    height: 100%;
    border-radius: 100px 0 0 100px;
    background-color: ${props => props.themeColor};
  }

  > div {
    width: 100%;
    padding: 0.75rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    > strong:first-of-type {
      font-style: italic;
      color: #868686;
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
      font-size: 1rem;
      color: ${props => props.themeColor};
      display: flex;
      gap: 0.875rem;

      > span {
        color: #868686;
      }
    }
  }
`

export const TrashIcon = styled(IoTrashOutline)`
  align-self: center;
  margin-right: 0.9rem;
  cursor: pointer;
  font-size: 2.5rem;
`
