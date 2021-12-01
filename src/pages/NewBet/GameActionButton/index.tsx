import { ReactNode } from 'react'

import { Container } from './styles'

interface GameActionButtonProps {
  children: ReactNode | ReactNode[];
  shouldFillTheBackground: boolean;
}

export const GameActionButton = ({
  children,
  shouldFillTheBackground,
}: GameActionButtonProps) => {
  return (
    <Container shouldFillTheBackground={shouldFillTheBackground}>
      {children}
    </Container>
  )
}
