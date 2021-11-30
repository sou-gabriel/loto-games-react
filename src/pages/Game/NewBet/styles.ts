import styled from 'styled-components'

export const Title = styled.h1`
  margin-bottom: 2.0625rem;

  font-style: italic;
  font-size: 1.5rem;
  color: #707070;
  text-transform: uppercase;

  > span {
    font-weight: normal;
  }
`

export const Subtitle = styled.h2`
  margin: 1.75rem 0 0.5rem;

  font-size: 1.0625rem;
  font-style: italic;
  color: #868686;
`

export const Description = styled.p`
  font-size: 1.0625rem;
  font-style: italic;
  color: #868686;
`

export const GameNumbersContainer = styled.div`
  display: flex;
  gap: 0.75rem;
`

export const GameNumberButton = styled.button`
  width: 3.9375rem;
  height: 4.0625rem;

  border-radius: 50%;

  font-size: 1.25rem;
  color: #FFF;

  background-color: #ADC0C4;
`
