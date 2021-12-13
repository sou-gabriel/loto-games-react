import { useState, useEffect, useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { AiOutlineArrowRight } from 'react-icons/ai'
import axios from 'axios'

import { Header } from 'components/Header'
import { Spinner } from 'components/Spinner'
import { MainContent } from 'components/MainContent'
import { GameChoiceButton } from 'components/GameChoiceButton'
import { ListOfSavedGames } from 'components/ListOfSavedGames'
import { RootState } from 'store/modules/rootReducer'
import { createActionToSetGameOptions } from 'store/modules/gameOptions/action'
import { createActionToSetMinimumCartValue } from 'store/modules/minCartValue/actions'
import { IGameOptions } from 'store/modules/gameOptions/types'
import { createActionToSetActiveGameOption } from 'store/modules/activeGameOption/actions'
import {
  Container,
  NavigationLink,
  Section,
  Heading,
  Title,
  FiltersContainer,
  Subtitle,
  GameChoiceButtonContainer,
} from './styles'
import { getUserToken } from 'shared/utils/functions'

interface IUserSavedGame {
  choosen_numbers: string
  created_at: string
  game_id: number
  id: number
  price: number
  type: {
    id: number
    type: string
  }
  user_id: number
}

export const Home = () => {
  const [isLoading, setIsLoading] = useState(true)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const gameOptions = useSelector((state: RootState) => state.gameOptions)
  const activeGameOption = useSelector(
    (state: RootState) => state.activeGameOption,
  )

  const storeGameOptions = useCallback(
    (gameOptions: IGameOptions) => {
      dispatch(createActionToSetMinimumCartValue(gameOptions.min_cart_value))
      dispatch(createActionToSetGameOptions(gameOptions.types))
    },
    [dispatch],
  )
  const [gameOptionsWithSavedBets, setGameOptionsWithSavedBets] = useState<
    number[]
  >([])

  const getIdOfGamesWithBets = useCallback(
    (userSavedGames: IUserSavedGame[]) => {
      return userSavedGames
        .map((userSavedGame) => userSavedGame.game_id)
        .filter((gameId, index, array) => array.indexOf(gameId) === index)
    },
    [],
  )

  useEffect(() => {
    const userToken = localStorage.getItem('token')

    if (!userToken) {
      navigate('/login', { replace: true })
    }
  }, [navigate])

  useEffect(() => {
    const fetchGameOptions = async () => {
      try {
        const response = await axios.get<IGameOptions>(
          'http://127.0.0.1:3333/cart_games',
        )

        if (response.status !== 200) {
          throw new Error('Um erro de conexão ocorreu. Tente novamente!')
        }

        const gameOptions = response.data

        storeGameOptions(gameOptions)
      } catch (error) {
        alert(error)
      }
    }

    fetchGameOptions()
  }, [dispatch, storeGameOptions])

  useEffect(() => {
    const areGameOptionsAvailable = gameOptions
    let timerId: ReturnType<typeof setTimeout>

    if (areGameOptionsAvailable) {
      const defaultGame = gameOptions[0]

      timerId = setTimeout(() => {
        setIsLoading(false)
        dispatch(createActionToSetActiveGameOption(defaultGame))
      }, 500)
    }

    return () => clearTimeout(timerId)
  }, [gameOptions, dispatch])

  useEffect(() => {
    axios
      .get('http://127.0.0.1:3333/bet/all-bets', {
        headers: {
          Authorization: `Bearer ${getUserToken()}`,
        },
      })
      .then((response) => {
        const userSavedGames: IUserSavedGame[] = response.data
        const idOfGamesOfBets = getIdOfGamesWithBets(userSavedGames)

        setGameOptionsWithSavedBets(idOfGamesOfBets)
      })
  }, [getIdOfGamesWithBets])

  return (
    <>
      <Header />
      <MainContent>
        {isLoading && <Spinner />}
        {!isLoading && (
          <Container>
            <Section>
              <Heading>
                <Title>Recent games</Title>
                <FiltersContainer>
                  <Subtitle>Filters</Subtitle>
                  <GameChoiceButtonContainer>
                    {gameOptions.map((gameOption) => (
                      <GameChoiceButton
                        key={gameOption.id}
                        value={gameOption.id}
                        theme={gameOption.color}
                        isActive={activeGameOption?.id === gameOption.id}
                        isDisabled={
                          !gameOptionsWithSavedBets.includes(gameOption.id)
                        }
                      >
                        {gameOption.type}
                      </GameChoiceButton>
                    ))}
                  </GameChoiceButtonContainer>
                </FiltersContainer>
              </Heading>
              <ListOfSavedGames />
            </Section>
            <NavigationLink to='/dashboard'>
              New Bet <AiOutlineArrowRight />
            </NavigationLink>
          </Container>
        )}
      </MainContent>
    </>
  )
}
