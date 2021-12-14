import styled from 'styled-components'

interface IGameNumberItemProps {
  color: string
  isAChosenNumber: boolean
}

interface ButtonProps {
  primary?: boolean
}

export const Title = styled.h2`
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

export const GameNumbersList = styled.div`
  margin-bottom: 2.75rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
  gap: 0.75rem;
`

export const GameNumberItem = styled.button<IGameNumberItemProps>`
  width: 3.9375rem;
  height: 4.0625rem;
  border-radius: 50%;
  font-size: 1.25rem;
  color: #fff;
  background-color: ${({ isAChosenNumber, color }) =>
    isAChosenNumber ? color : '#adc0c4'};
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

export const Button = styled.button<ButtonProps>`
  height: 3.25rem;
  padding: 1rem 1.375rem;
  border: 1px solid #27c383;
  border-radius: 10px;
  background-color: ${({ primary }) => (primary ? '#fff' : '#27c383')};
  font-size: 1rem;
  color: ${({ primary }) => (primary ? '#27c383' : '#fff')};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.80375rem;
  transition: all 50ms ease-in-out;

  &:hover {
    transform: scale(1.08);
    background-color: ${({ primary }) => (primary ? '#27c383' : '#fff')};
    color: ${({ primary }) => (primary ? '#fff' : '#27c383')};
  }

  @media (max-width: 876px) {
    width: 100%;
    align-self: baseline;

    &:hover {
      transform: scale(1);
    }
  }
`
