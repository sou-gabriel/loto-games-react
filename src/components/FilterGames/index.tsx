import {
  useEffect,
  useState,
  MouseEvent,
  Dispatch,
  SetStateAction,
} from 'react'
import { useSelector } from 'react-redux'

import { GameChoiceButton } from 'components'

import { RootState } from 'store/modules/rootReducer'

import { fetchAllBets } from 'shared/services'

import { Container, Title, Filters } from './styles'

interface IFilterGamesProps {
  activeBets: string[]
  setActiveBets: Dispatch<SetStateAction<string[]>>
}

export const FilterGames = ({
  activeBets,
  setActiveBets,
}: IFilterGamesProps) => {
  const gameOptions = useSelector(({ gameOptions }: RootState) => gameOptions)
  const [savedBetsId, setSavedBetsId] = useState<number[]>([])

  const handleFilterButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    const valueOfClickedGameOption = (e.target as HTMLButtonElement).value

    if (activeBets.includes(valueOfClickedGameOption)) {
      setActiveBets((oldActiveBets) => {
        return oldActiveBets.filter((oldActiveBet) => {
          return oldActiveBet !== valueOfClickedGameOption
        })
      })
      return
    }

    setActiveBets((oldActiveBets) => [
      ...oldActiveBets,
      valueOfClickedGameOption,
    ])
  }

  useEffect(() => {
    fetchAllBets().then((data) => {
      if (data) {
        const betsId = data.allBets
          .map(({ game_id }) => game_id)
          .filter((game_id, index, array) => array.indexOf(game_id) === index)

        setSavedBetsId(betsId)
      }
    })
  }, [])

  return (
    <Container>
      <Title>Filters</Title>
      <Filters>
        {gameOptions.map((gameOption) => {
          return (
            <GameChoiceButton
              key={gameOption.id}
              value={gameOption.type}
              onGameChoiceButtonClick={handleFilterButtonClick}
              theme={gameOption.color}
              isActive={activeBets.includes(gameOption.type)}
              isDisabled={!savedBetsId.includes(gameOption.id)}
            >
              {gameOption.type}
            </GameChoiceButton>
          )
        })}
      </Filters>
    </Container>
  )
}
