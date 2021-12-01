import styled from 'styled-components'

import { Link } from 'react-router-dom'

export const Container = styled.div`
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

export const Form = styled.form`
  width: 22rem;
  height: fit-content;
  margin-bottom: 1.875rem;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 14px;
  border: 1px solid #ddd;
  overflow: hidden;
`

export const InputGroup = styled.div`
  height: 5rem;
  border-bottom: 2px solid #ebebeb;
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

export const NavigationButton = styled(Link)`
  font-weight: bold;
  font-size: 2.1875rem;
  display: flex;
  align-items: center;
  gap: 0.98rem;
`
