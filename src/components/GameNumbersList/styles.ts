import styled from 'styled-components'

interface IGameNumberItemProps {
  color: string
  isAChosenNumber: boolean
}

export const Container = styled.div`
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
