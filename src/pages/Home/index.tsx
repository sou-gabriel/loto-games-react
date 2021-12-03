import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AiOutlineArrowRight } from 'react-icons/ai'

import { Header } from 'components/Header'
import { MainContent } from 'components/MainContent'
import { RecentGames } from 'pages/Home/RecentGames'

import * as S from './styles'

export const Home = () => {
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
          <RecentGames />
          <S.NavigationButton to='/dashboard'>
            New Bet
            <AiOutlineArrowRight />
          </S.NavigationButton>
        </S.Container>
      </MainContent>
    </>
  )
}
