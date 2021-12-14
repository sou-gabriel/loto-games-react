import { useState, useEffect, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { AiOutlineArrowRight } from 'react-icons/ai'
import axios from 'axios'

import {
  Header,
  MainContent,
  FilterGames,
  ListOfSavedGames,
  EmptyCart,
} from 'components'

import { createActionToSetGameOptions } from 'store/modules/gameOptions/action'
import { createActionToSetMinimumCartValue } from 'store/modules/minCartValue/actions'
import { IGameOptions } from 'store/modules/gameOptions/types'

import {
  Container,
  NavigationLink,
  Section,
  Heading,
  Title,
} from './styles'

export const Home = () => {
  const [activeBets, setActiveBets] = useState<string[]>([])
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const storeGameOptions = useCallback((gameOptions: IGameOptions) => {
    dispatch(createActionToSetMinimumCartValue(gameOptions.min_cart_value))
    dispatch(createActionToSetGameOptions(gameOptions.types))
  }, [dispatch])

  const redirectUnauthenticatedUser = useCallback(() => {
    const token = localStorage.getItem('token')

    if (!token) {
      navigate('login')
    }
  }, [navigate])

  const searchBettingOptions = useCallback(() => {
    axios
      .get<IGameOptions>('http://127.0.0.1:3333/cart_games')
      .then(({ data }) => storeGameOptions(data))
  }, [storeGameOptions])

  useEffect(() => {
    redirectUnauthenticatedUser()
    searchBettingOptions()
  }, [redirectUnauthenticatedUser, searchBettingOptions])

  return (
    <>
      <Header />
      <MainContent>
        <Container>
          <Section>
            <Heading>
              <Title>Recent games</Title>
              <FilterGames
                activeBets={activeBets}
                setActiveBets={setActiveBets}
              />
            </Heading>
            {activeBets.length === 0
              ? (
                <EmptyCart message='Não há jogos ativos!' />
                )
              : (
                <ListOfSavedGames activeBets={activeBets} />
                )}
          </Section>
          <NavigationLink to='/dashboard'>
            New Bet <AiOutlineArrowRight />
          </NavigationLink>
        </Container>
      </MainContent>
    </>
  )
}
