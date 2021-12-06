import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useDispatch } from 'react-redux'

import { Header } from 'components/Header'
import { MainContent } from 'components/MainContent'
import { NewBet } from './NewBet'
import { GameCart } from './GameGart'
import { addAvailableGames } from 'store/modules/availableGames/action'
import * as S from './styles'

export const Dashboard = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    const userToken = localStorage.getItem('token')

    if (!userToken) {
      navigate('/login', { replace: true })
    }
  }, [navigate])

  useEffect(() => {
    axios.get('http://127.0.0.1:3333/cart_games')
      .then(response => {
        const availableGames = response.data
        dispatch(addAvailableGames(availableGames))
      })
  }, [dispatch])

  return (
    <>
      <Header />
      <MainContent>
        <S.Container>
          <NewBet />
          <GameCart />
        </S.Container>
      </MainContent>
    </>
  )
}
