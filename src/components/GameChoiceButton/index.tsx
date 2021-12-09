import { ReactNode, MouseEvent } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { createActionToSetActiveGameOption } from 'store/modules/activeGameOption/actions'

import { RootState } from 'store/modules/rootReducer'
import { Container } from './styles'

interface GameChoiceButtonProps {
  children: ReactNode | ReactNode
  value: number
  theme: string
  isActive: boolean
}

export const GameChoiceButton = (props: GameChoiceButtonProps) => {
  const { value, theme, isActive, children } = props

  const gameOptions = useSelector((state: RootState) => state.gameOptions)
  const dispatch = useDispatch()

  const handleClickChoiseGameButton = (event: MouseEvent<HTMLButtonElement>) => {
    const clickedButtonValue = +(event.target as HTMLButtonElement).value
    const newActiveGame =
      gameOptions.find((gameOption) => gameOption.id === clickedButtonValue) ||
      null

    dispatch(createActionToSetActiveGameOption(newActiveGame))
  }

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
