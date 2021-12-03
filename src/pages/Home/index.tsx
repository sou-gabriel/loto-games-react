import { Header } from 'components/Header'
import { MainContent } from 'components/MainContent'
import { RecentGames } from 'pages/Home/RecentGames'

import { AiOutlineArrowRight } from 'react-icons/ai'

import * as S from './styles'

export const Home = () => {
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
