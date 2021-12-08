import styled from 'styled-components'

export const Container = styled.section`
  width: 37.6875rem;
  position: relative;
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

export const GameChoiceContainer = styled.div`
  margin-bottom: 1.75rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`

export const Subtitle = styled.h2`
  font-style: italic;
  font-size: 1.0625rem;
  color: #868686;
`

export const Description = styled.p`
  margin-bottom: 1.6875rem;
  font-size: 1.0625rem;
  font-style: italic;
  color: #868686;
  line-height: 1.5rem;
`

export const GameNumberList = styled.div`
  margin-bottom: 2.75rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
  gap: 0.75rem;
`

interface GameNumberProps {
  isActive?: boolean
  buttonColor?: string
}

export const GameNumber = styled.button<GameNumberProps>`
  width: 3.9375rem;
  height: 4.0625rem;
  border-radius: 50%;
  background-color: ${({ isActive, buttonColor }) =>
    isActive ? buttonColor : '#adc0c4'};
  font-size: 1.25rem;
  color: #fff;
`

export const ActionsContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 876px) {
    flex-direction: column;
    gap: 1rem;
  }
`

export const InnerActionsContainer = styled(ActionsContainer)`
  gap: 1.5625rem;

  @media (max-width: 876px) {
    flex-direction: row;
    justify-content: initial;
  }
`

interface ButtonProps {
  primary?: boolean
}

export const Button = styled.button<ButtonProps>`
  height: 3.25rem;
  padding: 1rem 1.375rem;
  border: 1px solid #27c383;
  border-radius: 10px;
  background-color: ${({ primary }) => (primary ? '#fff' : '#27c383')};
  font-size: 1rem;
  color: ${({ primary }) => (primary ? '#27c383' : '#fff')};
  display: flex;
  align-items: center;
  gap: 1.80375rem;

  @media (max-width: 876px) {
    align-self: baseline;
  }
`
