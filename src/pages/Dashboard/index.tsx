import { useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import axios from 'axios'

import { NewBet } from 'components/NewBet'
import { Header } from 'components/Header'
import { MainContent } from 'components/MainContent'
import { BettingCart } from 'components/BettingCart'
import { createActionToSetGameOptions } from 'store/modules/gameOptions/action'
import { createActionToSetMinimumCartValue } from 'store/modules/minCartValue/actions'
import { IGameOptions } from 'store/modules/gameOptions/types'
import { Container } from './styles'

export const Dashboard = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const storeGameOptions = useCallback((gameOptions: IGameOptions) => {
    dispatch(createActionToSetMinimumCartValue(gameOptions.min_cart_value))
    dispatch(createActionToSetGameOptions(gameOptions.types))
  }, [dispatch])

  useEffect(() => {
    const userToken = localStorage.getItem('token')

    if (!userToken) {
      navigate('/login', { replace: true })
    }
  }, [navigate])

  useEffect(() => {
    const fetchGameOptions = async () => {
      try {
        const response = await
        axios.get<IGameOptions>('http://127.0.0.1:3333/cart_games')

        if (response.status !== 200) {
          throw new Error('Um erro de conexão ocorreu. Tente novamente!')
        }

        const gameOptions = response.data

        storeGameOptions(gameOptions)
      } catch (error) {
        console.log(error)
      }
    }

    fetchGameOptions()
  }, [dispatch, storeGameOptions])

  return (
    <>
      <Header />
      <MainContent>
        <Container>
          <NewBet />
          <BettingCart />
        </Container>
      </MainContent>
    </>
  )
}
