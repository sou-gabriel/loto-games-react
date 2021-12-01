import styled from 'styled-components'

export const Main = styled.main`
  width: 100%;
  max-width: 1120px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2.5625rem;
`

export const Title = styled.h2`
  font-style: italic;
  font-size: 1.5rem;
  line-height: 5.3125rem;
  color: #707070;
  text-transform: uppercase;

  > span {
    font-weight: lighter;
  }
`

export const Subtitle = styled.h3`
  font-style: italic;
  font-size: 1.0625rem;
  color: #868686;
`

interface FlexRowProps {
  gap?: string
  justify?: string
}

export const FlexRow = styled.div<FlexRowProps>`
  margin: 1.25rem 0 1.75rem;
  display: flex;
  gap: ${props => props.gap || 'initial'};
  flex-wrap: wrap;
  justify-content: ${props => props.justify || 'initial'};
  align-items: center;
`

export const Description = styled.p`
  font-size: 1.0625rem;
  font-style: italic;
  color: #868686;
  line-height: 1.5rem;
  margin-bottom: 1.6875rem;
`

export const GameNumberButton = styled.button`
  width: 3.9375rem;
  height: 4.0625rem;
  border-radius: 50%;
  font-size: 1.25rem;
  color: #fff;
  background-color: #ADC0C4;
`
