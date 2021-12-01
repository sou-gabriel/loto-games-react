import styled from 'styled-components'

export const Container = styled.aside`
  background-color: #fff;
  border: 1px solid #E2E2E2;
  border-radius: 10px;
`

export const InnerContainer = styled.div`
  padding: 2rem 1rem 2.9375rem 1.0625rem;
`

export const UserGameList = styled.ul`
  max-height: 20.125rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  overflow: auto;
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
