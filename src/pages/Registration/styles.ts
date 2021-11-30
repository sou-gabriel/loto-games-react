import styled from 'styled-components'

export const Content = styled.div`
  height: 100%;
  padding-top: 9.625rem;

  display: flex;
  justify-content: space-between;
`

export const Flex = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  font-style: italic;
  color: #707070;
`

export const Title = styled.h2`
  margin-bottom: 1.625rem;

  font-weight: bold;
  font-size: 2.1875rem;
`

export const Input = styled.input`
  height: 5rem;
  padding: 0 1.875rem;
  border-bottom: 2px solid #EBEBEB;

  background-color: #FFF;

  font-weight: bold;
  font-size: 1.0625rem;
  font-style: italic;
  color: #9D9D9D;

  &::placeholder {
    color: inherit;
  }
`

export const SubmitButton = styled.button`
  flex-grow: 1;

  margin-top: 2.09375rem;

  font-weight: bold;
  font-size: 2.1875rem;
  font-style: italic;
  color: #b5c401;

  background: transparent;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.9375rem;
`

export const BackButton = styled.button`
  margin-top: 1.875rem;

  font-weight: bold;
  font-style: italic;
  font-size: 2.1875rem;
  color: #707070;

  display: flex;
  align-items: center;
  gap: 0.9375rem;
`
