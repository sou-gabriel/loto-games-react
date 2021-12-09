import { AiOutlineArrowRight } from 'react-icons/ai'

import { useBetCart } from 'hooks/useBetCart'
import { UserBetList } from 'components/UserBetList'
import { EmptyCart } from 'components/EmptyCart'
import {
  Container,
  InnerContainer,
  Title,
  TotalPrice,
  Button,
} from './styles'

export const BettingCart = () => {
  const { userGamesCart, getTotalCalculatedPrice, handleClickToSaveUserBets } =
    useBetCart()

  return (
    <Container>
      <InnerContainer>
        <Title>Cart</Title>
        {userGamesCart.length ? <UserBetList /> : <EmptyCart message='Não há jogos no carrinho.' />}
        <TotalPrice>
          <strong>Cart</strong> total: {getTotalCalculatedPrice()}
        </TotalPrice>
      </InnerContainer>
      <Button onClick={handleClickToSaveUserBets}>
        Save <AiOutlineArrowRight />
      </Button>
    </Container>
  )
}
