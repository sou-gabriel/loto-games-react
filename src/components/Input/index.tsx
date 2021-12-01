import { InputHTMLAttributes } from 'react'

import { Container } from './styles'

export const Input = (props: InputHTMLAttributes<HTMLInputElement>) => {
  return <Container {...props} />
}
