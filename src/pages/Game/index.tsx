import { Header } from 'components/Header'
import { NewBet } from './NewBet'

import { Main } from './styles'

export const Game = () => {
  return (
    <>
      <Header />
      <Main>
        <NewBet />
      </Main>
    </>
  )
}
