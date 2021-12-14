import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { AiOutlineArrowRight } from 'react-icons/ai'

import {
  Header,
  MainContent,
  FilterGames,
  ListOfSavedGames,
  EmptyCart,
} from 'components'

import { fetchCartGames } from 'shared/services'

import { createActionToSetGameOptions, createActionToSetMinimumCartValue } from 'store'

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

  useEffect(() => {
    const token = localStorage.getItem('token')

    if (!token) {
      navigate('/login')
      return
    }

    fetchCartGames()
      .then((data) => {
        if (data) {
          dispatch(createActionToSetMinimumCartValue(data.minCartValue))
          dispatch(createActionToSetGameOptions(data.games))
        }
      })
  }, [navigate, dispatch])

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
