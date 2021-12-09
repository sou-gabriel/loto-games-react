import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { NewBet } from 'components/NewBet'
import { Header } from 'components/Header'
import { MainContent } from 'components/MainContent'
import { BettingCart } from 'components/BettingCart'
import { Container } from './styles'

export const Dashboard = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const userToken = localStorage.getItem('token')

    if (!userToken) {
      navigate('/login', { replace: true })
    }
  }, [navigate])

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
