import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.9375rem;

  width: 100%;

  @media (max-width: 876px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const Title = styled.h2`
  font-size: 1.5rem;
  font-style: italic;
  color: #707070;
  text-transform: uppercase;
`

export const Filters = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
  gap: 1.5625rem 1rem;
  width: 100%;
`
