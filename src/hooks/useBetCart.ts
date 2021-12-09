import { useCallback, MouseEvent } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'

import { RootState } from 'store/modules/rootReducer'
import { createActionToRemoveGameFromCart } from 'store/modules/userGamesCart/actions'

interface IUserGamesCart {
  id: string
  color: string
  name: string
  numbers: number[]
  price: number
}

interface IUseBetCart {
  userGamesCart: IUserGamesCart[]
  getTotalPrice: () => number,
  getTotalCalculatedPrice: () => string,
  handleClickToRemoveBet: (event: MouseEvent<SVGElement>) => void,
  handleClickToSaveUserBets: () => void
}

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

export const useBetCart = (): IUseBetCart => {
  const userGamesCart: IUserGamesCart[] =
    useSelector((state: RootState) => state.userGamesCart)
  const minCartValue = useSelector((state: RootState) => state.minCartValue)
  const dispatch = useDispatch()

  const getFormattedGamePrice = useCallback((gamePrice: number) => {
    return new Intl.NumberFormat('pt-br', {
      style: 'currency',
      currency: 'BRL',
    }).format(gamePrice)
  }, [])

  const getTotalPrice = useCallback(() =>
    userGamesCart.reduce((acc, game) => acc + game.price, 0), [userGamesCart])

  const getTotalCalculatedPrice = useCallback(() => {
    const totalPrice = getTotalPrice()
    return getFormattedGamePrice(totalPrice)
  }, [getTotalPrice, getFormattedGamePrice])

  const handleClickToRemoveBet = (event: MouseEvent<SVGElement>) => {
    const idDataValue = (event.target as SVGElement).dataset.id || ''
    dispatch(createActionToRemoveGameFromCart(idDataValue))
  }

  const handleClickToSaveUserBets = () => {
    const totalPrice = getTotalPrice()

    if (totalPrice >= minCartValue) {
      axios.post('http://127.0.0.1:3333/bet/new-bet', DUMMY_VALUE)
    }
  }

  return {
    userGamesCart,
    getTotalPrice,
    getTotalCalculatedPrice,
    handleClickToRemoveBet,
    handleClickToSaveUserBets,
  }
}
