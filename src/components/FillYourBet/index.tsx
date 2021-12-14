import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { v4 as uuidv4 } from 'uuid'

import { GameNumbersList } from 'components'

import { showFeedbackMessage } from 'shared/utils/functions'

import { RootState } from 'store/modules/rootReducer'
import { IBet } from 'store/modules/bettingCart/types'
import { createActionToAddNewBetToCart } from 'store/modules/bettingCart/actions'

import {
  Title,
  Description,
  ActionsContainer,
  InnerActionsContainer,
  Button,
} from './styles'

export const FillYourBet = () => {
  const [chosenNumbers, setChosenNumbers] = useState<number[]>([])
  const activeGame = useSelector(({ activeGameOption }: RootState) => {
    return activeGameOption
  })
  const bettingCart = useSelector(({ bettingCart }: RootState) => bettingCart)
  const dispatch = useDispatch()

  const getRandomGameNumbers = () => {
    const randomNumbers: number[] = []

    do {
      const newRandomNumber = Math.round(Math.random() * activeGame.range)

      if (!randomNumbers.includes(newRandomNumber)) {
        randomNumbers.push(newRandomNumber)
      }
    } while (randomNumbers.length !== activeGame.max_number)

    return randomNumbers
  }

  const getChosenNumbersSorted = () => {
    return chosenNumbers
      .map((chosenNumber) => chosenNumber)
      .sort((a, b) => a - b)
  }

  const isItARepeatBet = (newBet: IBet) => {
    return bettingCart.some((bet) => {
      const isItTheSameTypeOfGame = bet.gameId === newBet.gameId
      const areTheNumbersChosenTheSame = bet.chosenNumbers.every(
        (chosenNumber, index) => {
          return chosenNumber === newBet.chosenNumbers[index]
        },
      )

      return isItTheSameTypeOfGame && areTheNumbersChosenTheSame
    })
  }

  const createNewBet = () => ({
    id: uuidv4(),
    gameId: activeGame.id,
    type: activeGame.type,
    color: activeGame.color,
    price: activeGame.price,
    chosenNumbers: getChosenNumbersSorted(),
  })

  const addNewBetToCart = (newBet: IBet) => {
    dispatch(createActionToAddNewBetToCart(newBet))
    showFeedbackMessage({
      type: 'success',
      message: 'Jogo adicionado com sucesso ao carrinho!',
    })
  }

  const clearChosenNumbers = () => {
    setChosenNumbers([])
  }

  const handleClearGameButtonClick = () => {
    const areThereNumbersChosen = chosenNumbers.length

    if (areThereNumbersChosen) {
      clearChosenNumbers()
      showFeedbackMessage({
        type: 'success',
        message: 'Números limpos com sucesso!',
      })
      return
    }

    showFeedbackMessage({
      type: 'error',
      message: 'Não há números para serem limpos!',
    })
  }

  const handleCompleteGameButtonClick = () => {
    const randomNumbersOption = getRandomGameNumbers()

    setChosenNumbers(randomNumbersOption)
    showFeedbackMessage({
      type: 'success',
      message: 'Cartela preenchida com sucesso!',
    })
  }

  const handleMakeBetButtonClick = () => {
    const newBet = createNewBet()
    const isTheNewBetRepeated = isItARepeatBet(newBet)

    const isANumberOfNumbersSmallerThanExpected = chosenNumbers.length < activeGame.max_number
    const isAnValidAmountOfChosenNumbers = chosenNumbers.length === activeGame.max_number
    const shouldYouAddTheNewBetToTheCart = !isTheNewBetRepeated && isAnValidAmountOfChosenNumbers

    if (isANumberOfNumbersSmallerThanExpected) {
      const numberOfAvailableNumbers = activeGame.max_number - chosenNumbers.length

      showFeedbackMessage({
        type: 'error',
        message: `Escolha mais ${numberOfAvailableNumbers} números para salvar o jogo!`,
      })
      return
    }

    if (isTheNewBetRepeated) {
      showFeedbackMessage({
        type: 'error',
        message: 'Já existe um semelhante no carrinho!',
      })
      return
    }

    if (shouldYouAddTheNewBetToTheCart) {
      addNewBetToCart(newBet)
      clearChosenNumbers()
    }
  }

  return (
    <>
      <Title>Fill your bet</Title>
      <Description>{activeGame.description}</Description>

      <GameNumbersList
        chosenNumbers={chosenNumbers}
        setChosenNumbers={setChosenNumbers}
      />

      <ActionsContainer>
        <InnerActionsContainer>
          <Button primary onClick={handleCompleteGameButtonClick}>
            Complete Game
          </Button>
          <Button primary onClick={handleClearGameButtonClick}>
            Clear Game
          </Button>
        </InnerActionsContainer>
        <Button onClick={handleMakeBetButtonClick}>
          <AiOutlineShoppingCart /> Add to Cart
        </Button>
      </ActionsContainer>
    </>
  )
}
