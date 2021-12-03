import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { Header } from 'components/Header'
import { MainContent } from 'components/MainContent'
import { NewBet } from './NewBet'
import { GameCart } from './GameGart'

import * as S from './styles'

export const Dashboard = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const userToken = localStorage.getItem('token')

    if (!userToken) {
      navigate('/login', { replace: true })
    }
  }, [])

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
