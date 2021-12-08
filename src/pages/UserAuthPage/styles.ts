import styled from 'styled-components/macro'

export const AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Container = styled.section`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    gap: 4rem;
  }
`

export const Title = styled.h1`
  font-weight: bold;
  font-size: 4.0625rem;
  font-style: italic;
  color: #707070;
  text-align: center;

  > span:first-of-type {
    display: inline-block;
    margin: 1.875rem 0 1.25rem;
    padding: 0.4375rem 3.5625rem;
    border-radius: 999px;
    background-color: #b5c401;
    font-size: 1.375rem;
    color: #fff;
  }

  > span:last-of-type {
    text-transform: uppercase;
  }

  @media (max-width: 768px) {
    > br:first-of-type {
      display: none;
    }
  }
`
