import { Link } from 'react-router-dom'
import { AiOutlineArrowRight } from 'react-icons/ai'

import { Header } from 'components/Header'
import { GameTypeButton } from 'components/GameTypeButton'

import { Main, FlexRow, Title, ActionsTitle, ActionsContainer } from './styles'

export const Dashboard = () => {
  return (
    <>
      <Header />
      <Main>
        <div>
          <FlexRow as='header'>
            <Title>Recent Games</Title>
            <FlexRow>
              <ActionsTitle>Filters</ActionsTitle>
              <ActionsContainer>
                <GameTypeButton
                  type='Lotofácil'
                  color='#7F3992'
                  isActive={false}
                />
                <GameTypeButton
                  type='Mega-Sena'
                  color='#01AC66'
                  isActive
                />
                <GameTypeButton
                  type='Lotomania'
                  color='#F79C31'
                  isActive={false}
                />
              </ActionsContainer>
            </FlexRow>
          </FlexRow>
          <ul>
            <li>
              <div>
                <span />
                <div>
                  <strong>01, 02,04,05,06,07,09,15,17,20,21,22,23,24,25</strong>
                  <p>30/11/2020 - (R$ 2,50)</p>
                  <p>Lotofácil</p>
                </div>
              </div>
            </li>
            <li>
              <div>
                <span />
                <div>
                  <strong>01, 02,04,05,06,07,09,15,17,20,21,22,23,24,25</strong>
                  <p>30/11/2020 - (R$ 2,50)</p>
                  <p>Megasena</p>
                </div>
              </div>
            </li>
            <li>
              <div>
                <span />
                <div>
                  <strong>01, 02,04,05,06,07,09,15,17,20,21,22,23,24,25</strong>
                  <p>30/11/2020 - (R$ 2,50)</p>
                  <p>Lotomania</p>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <Link to='/'>
          New Bet
          <AiOutlineArrowRight />
        </Link>
      </Main>
    </>
  )
}
