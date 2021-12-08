import { useState, useEffect, useCallback } from 'react'
import { useSelector } from 'react-redux'
import { Toaster } from 'react-hot-toast'
import { AiOutlineShoppingCart } from 'react-icons/ai'

import { GameNavigation } from 'components/GameNavigation'
import { Spinner } from 'components/Spinner'
import { RootState } from 'store/modules/rootReducer'
import { IGameOption } from 'store/modules/gameOptions/types'
import {
  Container,
  Title,
  GameChoiceContainer,
  Subtitle,
  Description,
  GameNumberList,
  GameNumber,
  ActionsContainer,
  InnerActionsContainer,
  Button,
} from './styles'

export const NewBet = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [currentGame, setCurrentGame] = useState<IGameOption | null>(null)
  const gameOptions = useSelector((state: RootState) => state.gameOptions)

  useEffect(() => {
    const areGameOptionsAvailable = gameOptions.types

    if (areGameOptionsAvailable) {
      const defaultGame = gameOptions.types[0]

      setIsLoading(false)
      setCurrentGame(defaultGame)
    }
  }, [gameOptions])

  const createRandomNumbers = useCallback(() => {
    const randomNumbers = []
    const gameNumberRange = (currentGame?.range || 0)

    for (let gameNumber = 0; randomNumbers.length <= gameNumberRange; gameNumber++) {
      randomNumbers.push(gameNumber)
    }

    return randomNumbers
  }, [currentGame])

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
        <GameNavigation />
      </GameChoiceContainer>
      <Subtitle>Fill your bet</Subtitle>
      <Description>{currentGame?.description}</Description>
      <GameNumberList>
        {createRandomNumbers().map((gameNumber) => (
          <GameNumber
            key={gameNumber}
            value={gameNumber}
          >
            {gameNumber}
          </GameNumber>
        ))}
      </GameNumberList>
      <ActionsContainer>
        <InnerActionsContainer>
          <Button primary>Complete Game</Button>
          <Button primary>Clear Game</Button>
        </InnerActionsContainer>
        <Button>
          <AiOutlineShoppingCart /> Add to Cart
        </Button>
      </ActionsContainer>
    </Container>
  )
}
