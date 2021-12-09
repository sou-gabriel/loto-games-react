import styled from 'styled-components'

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

export const Button = styled.button`
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

export const EmptyCartImage = styled.img`
  width: 5rem;
  height: 5rem;
  opacity: 0.4;
`
