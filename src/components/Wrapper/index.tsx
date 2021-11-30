import { ReactNode } from 'react'

import { Container } from './styles'

type WrapperProps = {
  children: ReactNode | ReactNode[]
}

export const Wrapper = ({ children }: WrapperProps) => {
  return <Container>{children}</Container>
}
