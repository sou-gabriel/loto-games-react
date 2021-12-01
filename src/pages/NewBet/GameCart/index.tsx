import { AiOutlineArrowRight } from 'react-icons/ai'

import { UserGame } from '../UserGame'

import { Container, InnerContainer, Title, UserGameList, TotalPrice, SaveGameButton } from './styles'

export const GameCart = () => {
  return (
    <Container>
      <InnerContainer>
        <Title>Cart</Title>
        <UserGameList>
          <UserGame />
          <UserGame />
          <UserGame />
        </UserGameList>
        <TotalPrice>
          <strong>Cart</strong> total: R$ 7,00
        </TotalPrice>
      </InnerContainer>
      <SaveGameButton>
        Save
        <AiOutlineArrowRight />
      </SaveGameButton>
    </Container>
  )
}
