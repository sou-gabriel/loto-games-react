import { ReactNode, MouseEvent } from 'react'

import { Container } from './styles'

interface IGameChoiceButtonProps {
  children: ReactNode | ReactNode
  value: number | string
  theme: string
  isActive: boolean
  isDisabled?: boolean
  onGameChoiceButtonClick: (e: MouseEvent<HTMLButtonElement>) => void
}

export const GameChoiceButton = (props: IGameChoiceButtonProps) => {
  const {
    value,
    theme,
    isActive,
    children,
    isDisabled,
    onGameChoiceButtonClick,
  } = props

  return (
    <Container
      value={value}
      theme={theme}
      isActive={isActive}
      disabled={isDisabled}
      onClick={onGameChoiceButtonClick}
    >
      {children}
    </Container>
  )
}
