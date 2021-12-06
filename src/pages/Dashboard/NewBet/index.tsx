import { useEffect, useState } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { useSelector } from 'react-redux'

import { IAvailableGame } from 'store/modules/availableGames/types'
import { RootState } from 'store/modules/rootReducer'
import * as S from './styles'

export const NewBet = () => {
  const [isLoadingAvailableGames, setIsLoadingAvailableGames] = useState(true)
  const [selectedGame, setSelectedGame] = useState<IAvailableGame | null>(null)

  const availableGames = useSelector((state: RootState) => state.availableGames)

  useEffect(() => {
    if (availableGames.types) {
      setTimeout(() => {
        const defaultGame = availableGames.types[0]

        setIsLoadingAvailableGames(false)
        setSelectedGame(defaultGame)
      }, 500)
    }
  }, [availableGames])

  if (isLoadingAvailableGames) {
    return <p>Loading...</p>
  }
  console.log(availableGames)

  return (
    <section>
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
                const selectedGameById = availableGames.types.find(
                  (availableGameType) =>
                    availableGameType.id === availableGame.id,
                ) || null

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
        <S.GameNumber />
        <S.GameNumber />
        <S.GameNumber />
        <S.GameNumber />
        <S.GameNumber />
        <S.GameNumber />
        <S.GameNumber />
        <S.GameNumber />
        <S.GameNumber />
        <S.GameNumber />
        <S.GameNumber />
        <S.GameNumber />
        <S.GameNumber />
        <S.GameNumber />
      </S.GameOptionsContainer>
      <S.GameActionsContainer>
        <S.GameActionsContainerInner>
          <S.Button>Complete Game</S.Button>
          <S.Button>Clear Game</S.Button>
        </S.GameActionsContainerInner>
        <S.Button isFill>
          <AiOutlineShoppingCart />
          Add to Cart
        </S.Button>
      </S.GameActionsContainer>
    </section>
  )
}
