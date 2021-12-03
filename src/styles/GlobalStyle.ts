import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, div#root {
    height: 100vh;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%;
    }
  }

  body {
    font-family: 'Helvetica', sans-serif;
    background-color: #F7F7F7;
  }

  div#root {
    height: 100%;
    max-height: fit-content;

    display: flex;
    flex-direction: column;
  }

  button {
    cursor: pointer;
  }

  button, input {
    outline: transparent;
    border: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`
