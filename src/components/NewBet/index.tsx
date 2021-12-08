import { useState, useEffect, useCallback, MouseEvent } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Toaster } from 'react-hot-toast'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { v4 as uuidv4 } from 'uuid'

import { Spinner } from 'components/Spinner'
import { GameChoiceButton } from 'components/GameChoiceButton'
import { showFeedbackMessage } from 'utils/functions'
import { RootState } from 'store/modules/rootReducer'
import { IGameOption } from 'store/modules/gameOptions/types'
import {
  Container,
  Title,
  GameChoiceContainer,
  Subtitle,
  GameChoiceButtonContainer,
  Description,
  GameNumberList,
  GameNumber,
  ActionsContainer,
  InnerActionsContainer,
  Button,
} from './styles'
import { createActionToAddGameToCart } from 'store/modules/userGameCart/actions'

export const NewBet = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [currentGame, setCurrentGame] = useState<IGameOption | null>(null)
  const [chosenNumbers, setChosenNumbers] = useState<number[]>([])
  const gameOptions = useSelector((state: RootState) => state.gameOptions)
  const dispatch = useDispatch()

  useEffect(() => {
    const areGameOptionsAvailable = gameOptions

    if (areGameOptionsAvailable) {
      const defaultGame = gameOptions[0]

      setIsLoading(false)
      setCurrentGame(defaultGame)
    }
  }, [gameOptions])

  const createGameNumbers = useCallback(() => {
    const randomNumbers = []
    const gameNumberRange = currentGame?.range || 0

    for (
      let gameNumber = 0;
      randomNumbers.length <= gameNumberRange;
      gameNumber++
    ) {
      randomNumbers.push(gameNumber)
    }

    return randomNumbers
  }, [currentGame])

  const createRandomNumbers = useCallback(() => {
    const randomNumbers: number[] = []

    do {
      const randomNumber = Math.round(Math.random() * (currentGame?.range || 0))

      if (!randomNumbers.includes(randomNumber)) {
        randomNumbers.push(randomNumber)
      }
    } while (randomNumbers.length !== currentGame?.max_number)

    return randomNumbers
  }, [currentGame])

  const handleClickGameNumber = (event: MouseEvent<HTMLButtonElement>) => {
    const newChosenNumber = Number((event.target as HTMLFormElement).value)
    const isANumberAlreadyChosen = chosenNumbers.includes(newChosenNumber)

    if (isANumberAlreadyChosen) {
      setChosenNumbers((prevChosenNumbers) =>
        prevChosenNumbers.filter(
          (prevChosenNumber) => prevChosenNumber !== newChosenNumber,
        ),
      )
      showFeedbackMessage({
        type: 'error',
        message: 'Número de jogo removido!',
      })
    } else if (chosenNumbers.length <= (currentGame?.max_number || 0)) {
      setChosenNumbers((prevChosenNumbers) =>
        prevChosenNumbers.concat(newChosenNumber),
      )
      showFeedbackMessage({
        type: 'success',
        message: 'Número de jogo adicionado!',
      })
    }
  }

  const handleCompleteGameButtonClick = () => {
    const randomNumbers = createRandomNumbers()

    setChosenNumbers(randomNumbers)
    showFeedbackMessage({
      type: 'success',
      message: 'Números selecionados com sucesso!',
    })
  }

  const handleClearGameButtonClick = () => {
    const isAValidAmountOfChosenNumbers =
      chosenNumbers.length === currentGame?.max_number

    setChosenNumbers([])

    if (isAValidAmountOfChosenNumbers) {
      showFeedbackMessage({
        type: 'error',
        message: 'Todos os números foram limpos!',
      })
    }
  }

  const handleClickAddGameToCartButton = () => {
    const isANumberOfChosenNumbersValid =
      chosenNumbers.length === currentGame?.max_number

    if (isANumberOfChosenNumbersValid) {
      const newGame = {
        id: uuidv4(),
        name: currentGame?.type || '',
        numbers: chosenNumbers,
        price: currentGame?.price || 0,
        color: currentGame?.color || '#000',
      }

      dispatch(createActionToAddGameToCart(newGame))
      showFeedbackMessage({
        type: 'success',
        message: 'Jogo adicionado ao carrinho!',
      })
      return
    }

    showFeedbackMessage({
      type: 'error',
      message: 'É necessário preencher todos os números!',
    })
  }

  const handleClickChoiseGameButton = (event: MouseEvent<HTMLButtonElement>) => {
    const clickedButtonValue = +(event.target as HTMLButtonElement).value
    const newCurrentGame = gameOptions.find(gameOption =>
      gameOption.id === clickedButtonValue) || null

    setCurrentGame(newCurrentGame)
  }

  if (isLoading) {
    return (
      <Container>
        <Spinner />
      </Container>
    )
  }

  return (
    <Container>
      <Toaster />
      <Title>
        New Bet <span>for {currentGame?.type}</span>
      </Title>
      <GameChoiceContainer>
        <Subtitle>Choose a game</Subtitle>
        <GameChoiceButtonContainer>
          {gameOptions.map(gameOption => (
            <GameChoiceButton
              key={gameOption.id}
              value={gameOption.id}
              handleClickChoiseGameButton={handleClickChoiseGameButton}
              theme={gameOption.color}
              isActive={currentGame?.id === gameOption.id}
            >
              {gameOption.type}
            </GameChoiceButton>
          ))}
        </GameChoiceButtonContainer>
      </GameChoiceContainer>
      <Subtitle>Fill your bet</Subtitle>
      <Description>{currentGame?.description}</Description>
      <GameNumberList>
        {createGameNumbers().map((gameNumber) => (
          <GameNumber
            key={gameNumber}
            value={gameNumber}
            onClick={handleClickGameNumber}
            isActive={chosenNumbers.includes(gameNumber)}
            buttonColor={currentGame?.color || '#ccc'}
          >
            {gameNumber}
          </GameNumber>
        ))}
      </GameNumberList>
      <ActionsContainer>
        <InnerActionsContainer>
          <Button primary onClick={handleCompleteGameButtonClick}>
            Complete Game
          </Button>
          <Button primary onClick={handleClearGameButtonClick}>
            Clear Game
          </Button>
        </InnerActionsContainer>
        <Button onClick={handleClickAddGameToCartButton}>
          <AiOutlineShoppingCart /> Add to Cart
        </Button>
      </ActionsContainer>
    </Container>
  )
}
