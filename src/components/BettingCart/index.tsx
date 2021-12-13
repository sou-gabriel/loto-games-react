import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { AiOutlineArrowRight } from 'react-icons/ai'
import axios from 'axios'

import { UserBetList } from 'components/UserBetList'
import { EmptyCart } from 'components/EmptyCart'

import { RootState } from 'store/modules/rootReducer'

import { getFormattedPrice, getUserToken, showFeedbackMessage } from 'shared/utils/functions'

import { Container, InnerContainer, Title, TotalPrice, Button } from './styles'
import { createActionToRemoveAllBetsFromCart } from 'store/modules/bettingCart/actions'

export const BettingCart = () => {
  const bettingCart = useSelector(({ bettingCart }: RootState) => bettingCart)
  const minCartValue = useSelector(
    ({ minCartValue }: RootState) => minCartValue,
  )
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const totalPrice = bettingCart.reduce((acc, bet) => {
    return acc + bet.price
  }, 0)

  const removeAllBetsFromCart = () => {
    dispatch(createActionToRemoveAllBetsFromCart())
    showFeedbackMessage({
      type: 'success',
      message: 'Jogos salvos com sucesso!',
    })
  }

  const getTransformedCartBets = () => {
    return bettingCart.map(bet => ({
      id: bet.gameId,
      numbers: bet.chosenNumbers,
    }))
  }

  const registerBets = async () => {
    const transformedCartBets = getTransformedCartBets()

    axios.post('http://127.0.0.1:3333/bet/new-bet', {
      games: transformedCartBets,
    }, {
      headers: {
        Authorization: `Bearer ${getUserToken()}`,
      },
    })

    navigate('/home')
  }

  const handleSaveButtonClick = () => {
    const isAnInvalidBettingCart = totalPrice < minCartValue

    if (isAnInvalidBettingCart) {
      showFeedbackMessage({
        type: 'error',
        message: `É necessário que você faça pelo menos ${getFormattedPrice(
          minCartValue,
        )} em apostas!`,
      })
      return
    }

    removeAllBetsFromCart()
    registerBets()
  }

  return (
    <Container>
      <InnerContainer>
        <Title>Cart</Title>
        {bettingCart.length
          ? (
            <UserBetList bets={bettingCart} />
            )
          : (
            <EmptyCart message='Não há jogos no carrinho!' />
            )}
        <TotalPrice>
          <strong>Cart</strong> total: {getFormattedPrice(totalPrice)}
        </TotalPrice>
      </InnerContainer>
      <Button onClick={handleSaveButtonClick}>
        Save <AiOutlineArrowRight />
      </Button>
    </Container>
  )
}
