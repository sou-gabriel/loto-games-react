import { ReactNode, MouseEvent } from 'react'

import { Container } from './styles'

interface GameChoiceButtonProps {
  children: ReactNode | ReactNode
  value: number
  handleClickChoiseGameButton: (event: MouseEvent<HTMLButtonElement>) => void
  theme: string
  isActive: boolean
}

export const GameChoiceButton = (props: GameChoiceButtonProps) => {
  const { handleClickChoiseGameButton, value, theme, isActive, children } =
    props

  return (
    <Container
      onClick={handleClickChoiseGameButton}
      value={value}
      theme={theme}
      isActive={isActive}
    >
      {children}
    </Container>
  )
}
