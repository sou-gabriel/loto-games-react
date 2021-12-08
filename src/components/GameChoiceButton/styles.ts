import styled from 'styled-components'

interface ContainerProps {
  theme: string
  isActive: boolean
}

export const Container = styled.button<ContainerProps>`
  flex-shrink: 0;
  padding: 0.5625rem 1.6875rem;
  border: 2px solid ${({ theme }) => theme};
  border-radius: 999px;
  font-weight: bold;
  font-style: italic;
  font-size: 0.875rem;
  text-align: center;
  white-space: nowrap;
  color: ${({ theme, isActive }) => isActive ? '#fff' : theme};
  background-color: ${({ theme, isActive }) => isActive ? theme : 'transparent'};
`
