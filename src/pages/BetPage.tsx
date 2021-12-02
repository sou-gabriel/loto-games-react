import { Header } from 'components/Header'
import { NewBet } from 'components/NewBet'
import { GameCart } from 'components/GameGart'

import styled from 'styled-components'

const Main = styled.main`
  width: 100%;
  max-width: 1120px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 2.5625rem;
`

export const BetPage = () => {
  return (
    <>
      <Header />
      <Main>
        <NewBet />
        <GameCart />
      </Main>
    </>
  )
}
