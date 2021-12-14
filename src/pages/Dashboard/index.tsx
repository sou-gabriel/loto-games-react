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
import axios from 'axios'

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

    axios
      .get('http://127.0.0.1:3333/cart_games', {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      })
      .then((response) => {
        dispatch(
          createActionToSetMinimumCartValue(response.data.min_cart_value),
        )
        dispatch(createActionToSetGameOptions(response.data.types))
        dispatch(createActionToSetActiveGameOption(response.data.types[0]))
        setIsLoading(false)
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
                        onGameChoiceButtonClick={(event: MouseEvent<HTMLButtonElement>) => {
                          const clickedButtonValue = +(event.target as HTMLButtonElement).value
                          const newActiveGame =
                            gameOptions.find((gameOption) => gameOption.id === clickedButtonValue) ||
                            null

                          dispatch(createActionToSetActiveGameOption(newActiveGame))
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
