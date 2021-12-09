import { Toaster } from 'react-hot-toast'
import { AiOutlineShoppingCart } from 'react-icons/ai'

import { useNewBet } from 'hooks/useNewBet'
import { Spinner } from 'components/Spinner'
import { GameChoiceButton } from 'components/GameChoiceButton'
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

export const NewBet = () => {
  const {
    isLoading,
    currentGame,
    chosenNumbers,
    gameOptions,
    createGameNumbers,
    handleClearGameButtonClick,
    handleClickAddGameToCartButton,
    handleClickChoiseGameButton,
    handleClickGameNumber,
    handleCompleteGameButtonClick,
  } = useNewBet()

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
          {gameOptions.map((gameOption) => (
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
