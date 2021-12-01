import { AiOutlineArrowRight } from 'react-icons/ai'

import { Header } from 'components/Header'
import { GameTypeButton } from 'components/GameTypeButton'
import { ListOfSavedGames } from './ListOfSavedGames'

import {
  Main,
  FlexColumn,
  FlexRow,
  Title,
  ActionsTitle,
  ActionsContainer,
  NewGameButton,
} from './styles'

export const Dashboard = () => {
  return (
    <>
      <Header />
      <Main>
        <FlexColumn>
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
                <GameTypeButton type='Mega-Sena' color='#01AC66' isActive />
                <GameTypeButton
                  type='Lotomania'
                  color='#F79C31'
                  isActive={false}
                />
              </ActionsContainer>
            </FlexRow>
          </FlexRow>
          <ListOfSavedGames />
        </FlexColumn>
        <NewGameButton to='/'>
          New Bet
          <AiOutlineArrowRight />
        </NewGameButton>
      </Main>
    </>
  )
}
