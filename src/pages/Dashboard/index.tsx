import { Header } from 'components/Header'
import { MainContent } from 'components/MainContent'
import { NewBet } from './NewBet'
import { GameCart } from './GameGart'

import * as S from './styles'

export const Dashboard = () => {
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
