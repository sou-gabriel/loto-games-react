import { useEffect, useState, MouseEvent } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useSelector } from 'react-redux'
import toast, { Toaster } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

import { IAvailableGame } from 'store/modules/availableGames/types'
import { RootState } from 'store/modules/rootReducer'
import * as S from './styles'

export const NewBet = () => {
  const [isLoadingAvailableGames, setIsLoadingAvailableGames] = useState(true)
  const [selectedGame, setSelectedGame] = useState<IAvailableGame | null>(null)
  const [choosenGameNumbers, setChoosenGameNumbers] = useState<number[]>([])
  const navigate = useNavigate()
  const availableGames = useSelector((state: RootState) => state.availableGames)

  useEffect(() => {
    if (availableGames.types) {
      setTimeout(() => {
        const defaultGame = availableGames.types[0]

        setIsLoadingAvailableGames(false)
        setSelectedGame(defaultGame)
      }, 500)
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
    const newChoosenGameNumber = Number(gameNumberButton.value)
    const hasTheNumberAlreadyBeenChosen =
      choosenGameNumbers.includes(newChoosenGameNumber)
    const maxNumbersAllowed = selectedGame?.max_number || 0
    const hasSpaceForOneMoreNumber =
      choosenGameNumbers.length < maxNumbersAllowed

    if (hasTheNumberAlreadyBeenChosen) {
      setChoosenGameNumbers((prevChoosenGameNumbers) =>
        prevChoosenGameNumbers.filter(
          (choosenGameNumber) => choosenGameNumber !== newChoosenGameNumber,
        ),
      )

      toast.remove()
      toast.error('Número removido.')
      return
    }

    if (hasSpaceForOneMoreNumber) {
      setChoosenGameNumbers((prevChoosenGameNumbers) =>
        prevChoosenGameNumbers.concat(newChoosenGameNumber),
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
    const randomNumbers =
      getRandomNumbers(selectedGame?.max_number, selectedGame?.range)
    setChoosenGameNumbers(randomNumbers)
  }

  const clearGame = () => {
    setChoosenGameNumbers([])
  }

  if (isLoadingAvailableGames) {
    return <p>Loading...</p>
  }

  return (
    <section>
      <Toaster />
      <S.Title>
        New Bet <span>for {selectedGame?.type}</span>
      </S.Title>
      <S.GameChoiseContainer>
        <S.Subtitle>Choose a game</S.Subtitle>
        <S.NavigationContainer>
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

                setChoosenGameNumbers([])
                setSelectedGame(selectedGameById)
              }}
            >
              {availableGame.type}
            </S.NavigationLink>
          ))}
        </S.NavigationContainer>
      </S.GameChoiseContainer>
      <S.Subtitle>Fill your bet</S.Subtitle>
      <S.GameDescription>{selectedGame?.description}</S.GameDescription>
      <S.GameOptionsContainer>
        {getGameNumbers(selectedGame?.range).map((gameNumber) => (
          <S.GameNumber
            key={gameNumber}
            value={gameNumber}
            onClick={handleClickGameNumberButton}
            isActive={choosenGameNumbers.includes(gameNumber)}
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
        <S.Button isFill>
          <AiOutlineShoppingCart />
          Add to Cart
        </S.Button>
      </S.GameActionsContainer>
    </section>
  )
}
