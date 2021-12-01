import styled from 'styled-components'

export const Main = styled.main`
  width: 100%;
  max-width: 1120px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`

export const FlexRow = styled.div`
  display: flex;
  align-items: center;
`

export const Title = styled.h2`
  font-size: 1.5rem;
  font-style: italic;
  color: #707070;
  line-height: 5.3125rem;
  text-transform: uppercase;
  margin-right: 2.8125rem;
`

export const ActionsTitle = styled.h3`
  margin-right: 0.9375rem;
  font-size: 1.0625rem;
  font-style: italic;
  color: #868686;
`

export const ActionsContainer = styled.div`
  display: flex;
  gap: 1.5625rem;
`
