import styled from 'styled-components'
interface ButtonProps {
  color: string
  isActive: boolean
}

export const Container = styled.button<ButtonProps>`
  padding: 0.5625rem 1.6875rem;
  border-radius: 999px;
  font-size: 0.875rem;
  font-style: italic;
  font-weight: bold;
  border: 2px solid ${({ color }) => color};
  color: ${({ isActive, color }) => isActive ? '#fff' : color};
  background: ${({ isActive, color }) => isActive ? color : '#fff'}
`
