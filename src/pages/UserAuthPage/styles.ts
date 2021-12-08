import styled from 'styled-components/macro'

import { Link } from 'react-router-dom'

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

export const AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Subtitle = styled.h2`
  margin-bottom: 1.625rem;
  font-style: italic;
  font-weight: bold;
  font-size: 2.1875rem;
  color: #707070;
`

export const Form = styled.form`
  flex-shrink: 0;
  width: 22rem;
  margin-bottom: 1.875rem;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  overflow: hidden;
  border-radius: 14px;
  border: 1px solid #ddd;
`

export const InputGroup = styled.div`
  height: 5rem;
  border-bottom: 2px solid #ebebeb;
  position: relative;
`

export const Input = styled.input`
  width: 100%;
  height: 100%;
  padding-left: 1.875rem;
  font-weight: bold;
  font-style: italic;
  font-size: 1.0625rem;
  color: #9d9d9d;

  > &::placeholder {
    color: inherit;
  }

  > &:active {
    color: red;
  }
`

export const LinkForgotPassword = styled(Link)`
  display: block;
  margin: 1.65625rem 1.6875rem 2.75rem auto;
  font-style: italic;
  font-size: 1.0625rem;
  color: #c1c1c1;
`

export const SubmitButton = styled.button`
  height: 112px;
  font-weight: bold;
  font-style: italic;
  font-size: 2.1875rem;
  color: #b5c401;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.98rem;
`

export const NavigationLink = styled(Link)`
  font-style: italic;
  font-weight: bold;
  color: #707070;
  font-size: 2.1875rem;
  display: flex;
  align-items: center;
  gap: 0.98rem;
`
