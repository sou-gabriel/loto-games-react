import styled from 'styled-components'

import { NavLink } from 'react-router-dom'

export const Title = styled.h2`
  margin-bottom: 2.0625rem;

  font-style: italic;
  font-size: 1.5rem;
  color: #707070;
  text-transform: uppercase;

  > span {
    font-weight: lighter;
  }
`

export const GameChoiseContainer = styled.div`
  margin-bottom: 1.75rem;

  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`

export const Subtitle = styled.h3`
  font-style: italic;
  font-size: 1.0625rem;
  color: #868686;
`

export const NavigationContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(117px, 1fr));
  gap: 1rem 1.5625rem;
`

export const NavigationLink = styled(NavLink)`
  flex-shrink: 0;

  padding: 0.5625rem 1.6875rem;
  border: 2px solid #7f3992;
  border-radius: 999px;

  font-weight: bold;
  font-style: italic;
  font-size: 0.875rem;
  text-align: center;
  white-space: nowrap;
  color: #7f3992;

  background-color: transparent;
`

export const GameDescription = styled.p`
  margin-bottom: 1.6875rem;

  font-size: 1.0625rem;
  font-style: italic;
  color: #868686;
  line-height: 1.5rem;
`

export const GameOptionsContainer = styled.div`
  margin-bottom: 2.75rem;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(50px, 1fr));
  gap: 0.75rem;
`

export const GameNumber = styled.button`
  width: 3.9375rem;
  height: 4.0625rem;
  border-radius: 50%;

  font-size: 1.25rem;
  color: #fff;

  background-color: #adc0c4;
`

export const GameActionsContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media(max-width: 876px) {
    flex-direction: column;
    gap: 1rem;
  }
`

export const GameActionsContainerInner = styled(GameActionsContainer)`
  gap: 1.5625rem;

  @media(max-width: 876px) {
    flex-direction: row;
    justify-content: initial;
  }
`

interface ButtonProps {
  isFill?: boolean
}

export const Button = styled.button<ButtonProps>`
  height: 3.25rem;
  padding: 1rem 1.375rem;
  border: 1px solid #27c383;
  border-radius: 10px;

  background-color: ${({ isFill }) => isFill ? '#27c383' : 'fff'};

  font-size: 1rem;
  color: ${({ isFill }) => isFill ? '#fff' : '#27c383'};

  display: flex;
  align-items: center;
  gap: 1.80375rem;

  @media(max-width: 876px) {
    align-self: baseline;
  }
`
