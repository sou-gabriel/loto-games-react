import { ButtonHTMLAttributes, ReactNode } from 'react'

import { Container } from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode | ReactNode[]
  color: string
}

export const Button = (props: ButtonProps) => {
  return <Container {...props}>{props.children}</Container>
}
