import { useEffect, useState, MouseEvent } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useSelector, useDispatch } from 'react-redux'
import toast, { Toaster } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'

import { Spinner } from 'components/Spinner'
import { addGameToCart } from 'store/modules/cartGames/actions'
import { IAvailableGame } from 'store/modules/availableGames/types'
import { RootState } from 'store/modules/rootReducer'
import * as S from './styles'

import { GameNavigation } from 'components/GameNavigation'
import { Wrapper } from './styles'

export const NewBet = () => {
  const [isLoadingAvailableGames, setIsLoadingAvailableGames] = useState(true)
  const [selectedGame, setSelectedGame] = useState<IAvailableGame | null>(null)
  const [chosenGameNumbers, setChosenGameNumbers] = useState<number[]>([])
  const navigate = useNavigate()
  const availableGames = useSelector((state: RootState) => state.availableGames)
  const dispatch = useDispatch()

  useEffect(() => {
    if (availableGames.types) {
      setTimeout(() => {
        const defaultGame = availableGames.types[0]

        setIsLoadingAvailableGames(false)
        setSelectedGame(defaultGame)
      }, 200)
    }
  }, [availableGames, navigate])

  const getGameNumbers = (range = 0): number[] => {
    const gameNumbers: number[] = []

    for (let gameNumber = 0; gameNumbers.length <= range; gameNumber++) {
      gameNumbers.push(gameNumber)
    }

    return gameNumbers
  }

  const handleClickGameNumberButton = (
    event: MouseEvent<HTMLButtonElement>,
  ) => {
    const gameNumberButton = event.target as HTMLButtonElement
    const newChosenGameNumber = Number(gameNumberButton.value)
    const hasTheNumberAlreadyBeenChosen =
      chosenGameNumbers.includes(newChosenGameNumber)
    const maxNumbersAllowed = selectedGame?.max_number || 0
    const hasSpaceForOneMoreNumber =
      chosenGameNumbers.length < maxNumbersAllowed

    if (hasTheNumberAlreadyBeenChosen) {
      setChosenGameNumbers((prevChosenGameNumbers) =>
        prevChosenGameNumbers.filter(
          (chosenGameNumber) => chosenGameNumber !== newChosenGameNumber,
        ),
      )

      toast.remove()
      toast.error('Número removido.')
      return
    }

    if (hasSpaceForOneMoreNumber) {
      setChosenGameNumbers((prevChosenGameNumbers) =>
        prevChosenGameNumbers.concat(newChosenGameNumber),
      )

      toast.remove()
      toast.success('Número selecionado.')
      return
    }

    toast.remove()
    toast.error('Você atingiu a quantidade máxima de números selecionados.')
  }

  const getRandomNumbers = (maxNumber = 0, range = 0): number[] => {
    const randomNumbers: number[] = []

    do {
      const randomNumber = Math.round(Math.random() * range)

      if (!randomNumbers.includes(randomNumber)) {
        randomNumbers.push(randomNumber)
      }
    } while (randomNumbers.length !== maxNumber)

    return randomNumbers
  }

  const completeGame = () => {
    const randomNumbers = getRandomNumbers(
      selectedGame?.max_number,
      selectedGame?.range,
    )
    setChosenGameNumbers(randomNumbers)
  }

  const clearGame = () => {
    setChosenGameNumbers([])
  }

  const handleClickAddGameToCartButton = () => {
    if (chosenGameNumbers.length === (selectedGame?.max_number || 0)) {
      const newGame = {
        id: uuidv4(),
        name: selectedGame?.type || '',
        numbers: chosenGameNumbers,
        price: selectedGame?.price || 0,
        color: selectedGame?.color || '#000',
      }

      dispatch(addGameToCart(newGame))
      return
    }

    toast.remove()
    toast.error('É necessário preencher a cartela com os números!')
  }

  if (isLoadingAvailableGames) {
    return (
      <Wrapper>
        <Spinner />
      </Wrapper>
    )
  }

  return (
    <Wrapper>
      <Toaster />
      <S.Title>
        New Bet <span>for {selectedGame?.type}</span>
      </S.Title>
      <S.GameChoiseContainer>
        <S.Subtitle>Choose a game</S.Subtitle>
        <GameNavigation />
        {/* <S.NavigationContainer>
          {availableGames.types.map((availableGame: IAvailableGame) => (
            <S.NavigationLink
              key={availableGame.id}
              to={`/dashboard/${availableGame.id}`}
              theme={availableGame.color}
              onClick={() => {
                const selectedGameById =
                  availableGames.types.find(
                    (availableGameType) =>
                      availableGameType.id === availableGame.id,
                  ) || null

                setChosenGameNumbers([])
                setSelectedGame(selectedGameById)
              }}
            >
              {availableGame.type}
            </S.NavigationLink>
          ))}
        </S.NavigationContainer> */}
      </S.GameChoiseContainer>
      <S.Subtitle>Fill your bet</S.Subtitle>
      <S.GameDescription>{selectedGame?.description}</S.GameDescription>
      <S.GameOptionsContainer>
        {getGameNumbers(selectedGame?.range).map((gameNumber) => (
          <S.GameNumber
            key={gameNumber}
            value={gameNumber}
            onClick={handleClickGameNumberButton}
            isActive={chosenGameNumbers.includes(gameNumber)}
            buttonColor={selectedGame?.color || '#fff'}
          >
            {gameNumber}
          </S.GameNumber>
        ))}
      </S.GameOptionsContainer>
      <S.GameActionsContainer>
        <S.GameActionsContainerInner>
          <S.Button onClick={completeGame}>Complete Game</S.Button>
          <S.Button onClick={clearGame}>Clear Game</S.Button>
        </S.GameActionsContainerInner>
        <S.Button isFill onClick={handleClickAddGameToCartButton}>
          <AiOutlineShoppingCart />
          Add to Cart
        </S.Button>
      </S.GameActionsContainer>
    </Wrapper>
  )
}
