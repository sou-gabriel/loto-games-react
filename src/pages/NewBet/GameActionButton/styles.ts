import styled from 'styled-components'

interface ButtonProps {
  shouldFillTheBackground: boolean
}

export const Container = styled.button<ButtonProps>`
  height: 3.25rem;
  padding: 1rem 1.375rem;
  border: 1px solid #27C383;
  font-size: 1rem;
  border-radius: 10px;
  background-color: ${({ shouldFillTheBackground }) =>
    shouldFillTheBackground ? '#27c383' : '#fff'};
  color: ${({ shouldFillTheBackground }) => shouldFillTheBackground ? '#fff' : '#27c383'};
`
