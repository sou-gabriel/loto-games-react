import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4rem;

  @media (max-width: 588px) {
    flex-direction: column;
    align-content: center;
    gap: 2rem;
  }
`

export const Section = styled.section`
  position: relative;
  flex-grow: 1;
`

export const Title = styled.h1`
  margin-bottom: 2.0625rem;

  font-style: italic;
  font-size: 1.5rem;
  color: #707070;
  text-transform: uppercase;

  > span {
    font-weight: lighter;
  }
`

export const Subtitle = styled.h2`
  font-style: italic;
  font-size: 1.0625rem;
  color: #868686;
`

export const GameChoiceContainer = styled.div`
  margin-bottom: 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`

export const GameChoiceButtonContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1.5625rem 1rem;
  width: 100%;
`
