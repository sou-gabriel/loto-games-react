import { AiOutlineArrowRight } from 'react-icons/ai'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'

import { RootState } from 'store/modules/rootReducer'
import { removeGameFromCart } from 'store/modules/cartGames/actions'
import * as S from './styles'

const DUMMY_VALUE = {
  games: [
    {
      id: 3,
      numbers: [1, 2, 3, 4, 5],
    },
    {
      id: 3,
      numbers: [1, 2, 3, 4, 5],
    },
    {
      id: 3,
      numbers: [1, 2, 3, 4, 5],
    },
  ],
}

export const GameCart = () => {
  const gamesCart = useSelector((state: RootState) => state.cartGames)
  const dispatch = useDispatch()

  const getFormattedGamePrice = (gamePrice: number) => {
    return new Intl.NumberFormat('pt-br', {
      style: 'currency',
      currency: 'BRL',
    }).format(gamePrice)
  }

  const getTotalPrice = () => {
    const totalPrice = gamesCart.reduce((acc, game) => acc + game.price, 0)
    return totalPrice
  }

  const getTotalCalculatedPrice = () => {
    const totalPrice = getTotalPrice()
    return getFormattedGamePrice(totalPrice)
  }

  const saveGameBets = () => {
    const totalPrice = getTotalPrice()

    if (totalPrice >= 30) {
      axios.post('http://127.0.0.1:3333/bet/new-bet', DUMMY_VALUE)
    }
  }

  return (
    <S.Container>
      <S.InnerContainer>
        <S.Title>Cart</S.Title>
        <S.NumbersList>
          {gamesCart.length === 0
            ? (
              <p>A lista de jogos está vazia</p>
              )
            : (
                gamesCart.map((game) => (
                  <S.ListItem key={game.id} themeColor={game.color}>
                    <S.TrashIcon
                      onClick={() => dispatch(removeGameFromCart(game.id))}
                      color='#888888'
                    />
                    <span />
                    <div>
                      <strong>{game.numbers.join(', ')}</strong>
                      <p>
                        <strong>{game.name}</strong>
                        <span>{getFormattedGamePrice(game.price)}</span>
                      </p>
                    </div>
                  </S.ListItem>
                ))
              )}
        </S.NumbersList>
        <S.TotalPrice>
          <strong>Cart</strong> total: {getTotalCalculatedPrice()}
        </S.TotalPrice>
      </S.InnerContainer>
      <S.SaveGameButton onClick={saveGameBets}>
        Save
        <AiOutlineArrowRight />
      </S.SaveGameButton>
    </S.Container>
  )
}
