import styled from 'styled-components'

interface ContainerProps {
  theme: string
  isActive: boolean
}

export const Container = styled.button<ContainerProps>`
  flex: 1;
  min-width: fit-content;
  height: fit-content;
  padding: 0.5625rem 0.3rem;
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
