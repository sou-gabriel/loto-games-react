import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  max-width: 1020px;
  height: 100%;
  margin: 0 auto;
  padding: 9.625rem 2rem;
  display: flex;
  justify-content: space-between;
`

export const Content = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-style: italic;
  color: #707070;

  > h2 {
    margin-bottom: 1.625rem;
    font-weight: bold;
    font-size: 2.1875rem;
  }

  > form {
    width: 22rem;
    height: fit-content;
    margin-bottom: 1.875rem;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    border-radius: 14px;
    border: 1px solid #ddd;
    overflow: hidden;

    > a {
      display: block;
      margin: 1.65625rem 1.6875rem 2.75rem auto;
      font-style: italic;
      font-size: 1.0625rem;
      color: #C1C1C1;
    }
  }
`
