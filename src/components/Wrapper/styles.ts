import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  max-width: 1020px;
  height: 100%;
  margin: 0 auto;
  padding: 9.625rem 2rem;
  display: flex;
  justify-content: space-between;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`
