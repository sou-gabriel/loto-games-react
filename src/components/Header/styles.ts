import styled from 'styled-components'

export const Container = styled.header`
  margin-bottom: 5.1875rem;
  padding-top: 0.9375rem;

  border-bottom: 2px solid #EBEBEB;
`

export const Row = styled.div`
  width: 100%;
  max-width: 1020px;
  margin: 0 auto;

  display: flex;
  align-items: center;
`

export const Logo = styled.h1`
  font-size: 2.75rem;
  font-style: italic;
  line-height: 4.375rem;
  color: #707070;
  text-align: center;

  &:after {
    content: '';

    display: block;
    width: 6.6875rem;
    height: 0.4375rem;

    border-radius: 6px;

    background-color: #B5C401;

    transform: translateY(50%);
  }
`

export const Navigation = styled.nav`
  width: 100%;
  height: 100%;
  margin-left: 4rem;
`

export const LinkList = styled.ul`
  display: flex;

  list-style: none;

  font-weight: bold;
  font-style: italic;
  font-size: 1.25rem;
  color: #707070;

  > li {
    margin-right: 2.5rem;

    > a {
      display: flex;
      align-items: center;
      gap: 0.625rem;
    }
  }

  > li:first-child {
    margin-right: auto;
  }
`
