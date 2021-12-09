import { AiOutlineArrowRight } from 'react-icons/ai'

import { useBetCart } from 'hooks/useBetCart'
import { UserBetList } from 'components/UserBetList'
import emptyCartIconPath from 'assets/icons/empty-cart.png'
import {
  Container,
  InnerContainer,
  Title,
  TotalPrice,
  EmptyCartImage,
  Button,
} from './styles'

export const BettingCart = () => {
  const { userGamesCart, getTotalCalculatedPrice, handleClickToSaveUserBets } =
    useBetCart()

  return (
    <Container>
      <InnerContainer>
        <Title>Cart</Title>
        {userGamesCart.length
          ? (
            <UserBetList />
            )
          : (
            <EmptyCartImage src={emptyCartIconPath} />
            )}
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
