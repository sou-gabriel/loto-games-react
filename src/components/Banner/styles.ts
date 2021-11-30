import styled from 'styled-components'

export const Container = styled.h1`
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

    background-color: #B5C401;

    font-size: 1.375rem;
    color: #fff;
  }

  > span:last-of-type {
    text-transform: uppercase;
  }
`
