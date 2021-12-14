import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4rem;

  @media (max-width: 588px) {
    flex-direction: column-reverse;
    align-content: center;
    gap: 2rem;
  }
`

export const NavigationLink = styled(Link)`
  font-weight: bold;
  font-style: italic;
  font-size: 1.75rem;
  color: #b5c401;
  display: flex;
  align-items: center;
  gap: 0.6875rem;
  align-self: flex-start;
  white-space: nowrap;

  @media (max-width: 588px) {
    align-self: center;
  }
`

export const Section = styled.section`
  flex-grow: 0.5;
  min-height: 450px;
  position: relative;
  width: 100%;
`

export const Heading = styled.header`
  margin-bottom: 2.1875rem;
  display: flex;
  align-items: center;
  gap: 2.8125rem;

  @media (max-width: 876px) {
    flex-direction: column;
    gap: 1rem;
  }

  & + div {
    margin-top: 100px;
  }
`

export const Title = styled.h2`
  font-size: 1.5rem;
  font-style: italic;
  color: #707070;
  text-transform: uppercase;
`

export const Subtitle = styled.h3`
  font-size: 1.0625rem;
  font-style: italic;
  color: #868686;
`
