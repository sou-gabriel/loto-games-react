import { ReactNode } from 'react'

import { Container } from './styles'

interface WrapperProps {
  children: ReactNode | ReactNode[]
}

export const MainContent = ({ children }: WrapperProps) => {
  return <Container>{children}</Container>
}
