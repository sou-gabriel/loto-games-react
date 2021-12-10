import styled from 'styled-components'

export const Container = styled.main`
  flex: 1;
  align-self: center;
  width: 100%;
  max-width: 1016px;
  height: calc(100vh - 5.875rem - 5.09375rem);
  min-height: 736px;
  margin: 0 auto;
  padding: 0 1rem;

  header + & {
    padding-top: 4.5rem;
  }
`
