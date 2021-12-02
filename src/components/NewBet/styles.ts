import styled from 'styled-components'

export const Section = styled.section`
  max-width: 42.75rem;
`

export const PrimaryTitle = styled.h2`
  font-style: italic;
  font-size: 1.5rem;
  line-height: 5.3125rem;
  color: #707070;
  text-transform: uppercase;

  > span {
    font-weight: lighter;
  }
`

export const SecondaryTitle = styled.h3`
  font-style: italic;
  font-size: 1.0625rem;
  color: #868686;
`

export const GameTypeButtonContainer = styled.div`
  margin: 1.25rem 0 1.75rem;
  display: flex;
  gap: 1.5625rem;
`

export const Description = styled.p`
  font-size: 1.0625rem;
  font-style: italic;
  color: #868686;
  line-height: 1.5rem;
  margin-bottom: 1.6875rem;
`

export const GameNumberOptionsContainer = styled.div`
  margin-bottom: 2.75rem;
  display: flex;
  justify-content: space-between;
  gap: 0.75rem;
  flex-wrap: wrap;
`

export const GameNumberButton = styled.button`
  width: 3.9375rem;
  height: 4.0625rem;
  border-radius: 50%;
  font-size: 1.25rem;
  color: #fff;
  background-color: #ADC0C4;
`

export const ActionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const ActionsContainerInner = styled(GameTypeButtonContainer)`
  margin: 0;
`

export const PrimaryButton = styled.button`
  height: 3.25rem;
  padding: 1rem 1.375rem;
  border: 1px solid #27c383;
  font-size: 1rem;
  border-radius: 10px;
  background-color: #fff;
  color: #27c383;
  display: flex;
  align-items: center;
  gap: 1.80375rem;
`

export const SecondaryButton = styled(PrimaryButton)`
  background-color: #27c383;
  color: #fff;
`
