import {
  useEffect,
  useState,
  MouseEvent,
  Dispatch,
  SetStateAction,
} from 'react'
import { useSelector } from 'react-redux'
import axios from 'axios'

import { GameChoiceButton } from 'components'

import { RootState } from 'store/modules/rootReducer'

import { getUserToken } from 'shared/utils/functions'

import { Container, Title, Filters } from './styles'

interface IFilterGamesProps {
  activeBets: string[]
  setActiveBets: Dispatch<SetStateAction<string[]>>
}

interface ISavedBet {
  choosen_numbers: string
  created_at: string
  game_id: number
  id: number
  price: 2
  type: {
    id: number
    type: string
  }
  user_id: number
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
    const searchAllBets = () => {
      axios
        .get<ISavedBet[]>('http://127.0.0.1:3333/bet/all-bets', {
          headers: {
            Authorization: `Bearer ${getUserToken()}`,
          },
        })
        .then(({ data }) => {
          const gamesId = data
            .map(({ game_id }) => game_id)
            .filter((game_id, index, array) => {
              return array.indexOf(game_id) === index
            })

          setSavedBetsId(gamesId)
        })
        .catch(console.log)
    }

    searchAllBets()
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
