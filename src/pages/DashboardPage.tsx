import { AiOutlineArrowRight } from 'react-icons/ai'

import { Link } from 'react-router-dom'

import { Wrapper } from 'components/Wrapper'
import { Header } from 'components/Header'
import { RecentGames } from 'components/RecentGames'

import styled from 'styled-components'

export const NewGameButton = styled(Link)`
  font-weight: bold;
  font-style: italic;
  font-size: 1.75rem;
  color: #b5c401;
  display: flex;
  align-items: center;
  gap: 0.6875rem;
  align-self: flex-start;
`

export const DashboardPage = () => {
  return (
    <>
      <Header />
      <Wrapper>
        <div>
          <RecentGames />
        </div>
        <NewGameButton to='/'>
          New Bet
          <AiOutlineArrowRight />
        </NewGameButton>
      </Wrapper>
    </>
  )
}
