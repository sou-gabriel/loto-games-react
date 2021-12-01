import styled from 'styled-components'

interface ButtonProps {
  color: string
}

export const Container = styled.button<ButtonProps>`
  font-weight: bold;
  font-style: italic;
  font-size: 2.1875rem;
  line-height: 4.375rem;
  color: ${props => props.color};
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.9375rem;
`
