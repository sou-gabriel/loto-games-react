import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 4rem;

  @media (max-width: 588px) {
    flex-direction: column;
    align-content: center;
    gap: 2rem;
  }
`
