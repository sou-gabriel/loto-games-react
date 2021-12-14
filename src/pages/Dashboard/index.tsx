import { useEffect, useState, MouseEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'

import {
  Header,
  MainContent,
  BettingCart,
  GameChoiceButton,
  FillYourBet,
  Spinner,
} from 'components'

import { fetchCartGames } from 'shared/services'

import { RootState } from 'store/modules/rootReducer'
import {
  createActionToSetMinimumCartValue,
  createActionToSetGameOptions,
  createActionToSetActiveGameOption,
} from 'store'

import {
  Container,
  Section,
  Title,
  Subtitle,
  GameChoiceContainer,
  GameChoiceButtonContainer,
} from './styles'

export const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const activeGame = useSelector(({ activeGameOption }: RootState) => {
    return activeGameOption
  })
  const gameOptions = useSelector(({ gameOptions }: RootState) => gameOptions)

  useEffect(() => {
    const userToken = localStorage.getItem('token')

    if (!userToken) {
      navigate('/login', { replace: true })
      return
    }

    fetchCartGames()
      .then(data => {
        if (data) {
          dispatch(createActionToSetMinimumCartValue(data.minCartValue))
          dispatch(createActionToSetGameOptions(data.games))
          dispatch(createActionToSetActiveGameOption(data.games[0]))
          setIsLoading(false)
        }
      })
  }, [navigate, dispatch])

  return (
    <>
      <Header />
      <MainContent>
        <Container>
          {isLoading && <Spinner />}
          {!isLoading && (
            <>
              <Section>
                <Toaster />
                <Title>
                  New Bet <span>for {activeGame?.type}</span>
                </Title>
                <GameChoiceContainer>
                  <Subtitle>Choose a game</Subtitle>
                  <GameChoiceButtonContainer>
                    {gameOptions.map((gameOption) => (
                      <GameChoiceButton
                        key={gameOption.id}
                        value={gameOption.id}
                        theme={gameOption.color}
                        isActive={activeGame?.id === gameOption.id}
                        onGameChoiceButtonClick={(
                          event: MouseEvent<HTMLButtonElement>,
                        ) => {
                          const clickedButtonValue = +(
                            event.target as HTMLButtonElement
                          ).value
                          const newActiveGame =
                            gameOptions.find(
                              (gameOption) =>
                                gameOption.id === clickedButtonValue,
                            ) || null

                          dispatch(
                            createActionToSetActiveGameOption(newActiveGame),
                          )
                        }}
                      >
                        {gameOption.type}
                      </GameChoiceButton>
                    ))}
                  </GameChoiceButtonContainer>
                </GameChoiceContainer>

                <FillYourBet />
              </Section>
              <BettingCart />
            </>
          )}
        </Container>
      </MainContent>
    </>
  )
}
