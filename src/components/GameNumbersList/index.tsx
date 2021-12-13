import { useEffect, useState, MouseEvent, Dispatch, SetStateAction } from 'react'
import { useSelector } from 'react-redux'

import { RootState } from 'store/modules/rootReducer'
import { IActiveGameOption } from 'store/modules/activeGameOption/types'

import { showFeedbackMessage } from 'shared/utils/functions'

import { Container, GameNumberItem } from './styles'

interface IGameNumbersList {
  chosenNumbers: number[]
  setChosenNumbers: Dispatch<SetStateAction<number[]>>
}

export const GameNumbersList = (props: IGameNumbersList) => {
  const { chosenNumbers, setChosenNumbers } = props

  const [gameNumbers, setGameNumbers] = useState<number[]>([])
  const activeGame = useSelector(({ activeGameOption }: RootState) => {
    return activeGameOption
  })

  useEffect(() => {
    const createGameNumbers = (activeGame: IActiveGameOption) => {
      const numbersList = []
      const numbersLimit = activeGame.range

      for (
        let gameNumber = 1;
        numbersList.length < numbersLimit;
        gameNumber++
      ) {
        numbersList.push(gameNumber)
      }

      setGameNumbers(numbersList)
      setChosenNumbers([])
    }

    createGameNumbers(activeGame)
  }, [activeGame, setChosenNumbers])

  const removeChosenNumber = (numberToBeRemoved: number) => {
    setChosenNumbers((oldChosenNumbers: number[]) => {
      return oldChosenNumbers.filter((oldChosenNumber) => {
        return oldChosenNumber !== numberToBeRemoved
      })
    })
    showFeedbackMessage({
      type: 'error',
      message: 'Número desmarcado da aposta!',
    })
  }

  const addChosenNumber = (newChosenNumber: number) => {
    setChosenNumbers((oldChosenNumbers: number[]) => {
      return [...oldChosenNumbers, newChosenNumber]
    })
    showFeedbackMessage({
      type: 'success',
      message: 'Número selecionado com sucesso!',
    })
  }

  const handleGameNumberOptionClick = (e: MouseEvent<HTMLButtonElement>) => {
    const newChosenNumber = Number((e.target as HTMLButtonElement).value)
    const hasTheNumberAlreadyBeenChosen = chosenNumbers.includes(newChosenNumber)
    const shouldAddANewNumber = chosenNumbers.length < activeGame.max_number

    if (hasTheNumberAlreadyBeenChosen) {
      removeChosenNumber(newChosenNumber)
      return
    }

    if (shouldAddANewNumber) {
      addChosenNumber(newChosenNumber)
      return
    }

    showFeedbackMessage({
      type: 'error',
      message: 'Não é possível escolher novos números!',
    })
  }

  return (
    <Container>
      {gameNumbers.map((gameNumber) => {
        const formattedGameNumber =
          gameNumber < 10 ? `0${gameNumber}` : gameNumber

        return (
          <GameNumberItem
            key={gameNumber}
            value={gameNumber}
            color={activeGame.color}
            onClick={handleGameNumberOptionClick}
            isAChosenNumber={chosenNumbers.includes(gameNumber)}
          >
            {formattedGameNumber}
          </GameNumberItem>
        )
      })}
    </Container>
  )
}
