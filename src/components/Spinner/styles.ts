import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  from {
    transform: rotate(0);
  } to {
    transform: rotate(360deg);
  }
`

export const Container = styled.div`
  display: inline-block;
  width: 40px;
  height: 40px;
  border: 6px solid #868686;
  border-right-color: transparent;
  border-radius: 50%;
  animation: ${rotate} 500ms infinite linear;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%)
`
