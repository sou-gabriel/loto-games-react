import { useCallback, MouseEvent } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'

import {
  createActionToRemoveBetFromCart,
  createActionToRemoveAllBets,
} from 'store/modules/bettingCart/actions'
import { RootState } from 'store/modules/rootReducer'
import {
  showFeedbackMessage,
  getErrorMessage,
  getUserToken,
  getFormattedGamePrice,
} from 'utils/functions'

interface IbettingCart {
  id: number
  color: string
  name: string
  numbers: number[]
  price: number
}

interface IUseBetCart {
  bettingCart: IbettingCart[]
  calculateTotalPriceOfCartGames: () => number
  getTotalCalculatedPrice: () => string
  handleClickToRemoveBet: (event: MouseEvent<SVGElement>) => void
  handleClickToSaveUserBets: () => void
}

interface ITransformedGame {
  id: number
  numbers: number[]
}

interface IData {
  games: ITransformedGame[]
}

interface IConfig {
  headers: {
    Authorization: string
  }
}

export const useBetCart = (): IUseBetCart => {
  const bettingCart: IbettingCart[] = useSelector(
    (state: RootState) => state.bettingCart,
  )
  const minCartValue = useSelector((state: RootState) => state.minCartValue)
  const dispatch = useDispatch()

  const calculateTotalPriceOfCartGames = useCallback(
    () => bettingCart.reduce((acc, game) => acc + game.price, 0),
    [bettingCart],
  )

  const getTotalCalculatedPrice = useCallback(() => {
    const totalPrice = calculateTotalPriceOfCartGames()
    return getFormattedGamePrice(totalPrice)
  }, [calculateTotalPriceOfCartGames])

  const getTransformedCartGames = useCallback(
    () => bettingCart.map(({ id, numbers }) => ({ id, numbers })),
    [bettingCart],
  )

  const registerGames = async (data: IData, config: IConfig) => {
    try {
      const response = await axios.post(
        'http://127.0.0.1:3333/bet/new-bet',
        data,
        config,
      )

      if (response.status !== 200) {
        throw new Error('Um erro de conexão ocorreu. Tente novamente!')
      }

      dispatch(createActionToRemoveAllBets())
      showFeedbackMessage({
        type: 'success',
        message: 'Jogos salvos com sucesso!',
      })
    } catch (error) {
      const message = getErrorMessage(error)

      showFeedbackMessage({
        type: 'error',
        message,
      })
    }
  }

  const handleClickToRemoveBet = (event: MouseEvent<SVGElement>) => {
    const idDataValue = Number((event.target as SVGElement).dataset.id) || 0
    dispatch(createActionToRemoveBetFromCart(idDataValue))
  }

  const handleClickToSaveUserBets = () => {
    const totalPriceOfCartBets = calculateTotalPriceOfCartGames()
    const transformedbettingCart = getTransformedCartGames()
    const userToken = getUserToken()

    if (totalPriceOfCartBets >= minCartValue) {
      const data = { games: transformedbettingCart }
      const config = {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      }

      registerGames(data, config)
      return
    }

    showFeedbackMessage({
      type: 'error',
      message: `É necessário ter no carrinho pelo menos ${getFormattedGamePrice(
        minCartValue,
      )} em jogos.`,
    })
  }

  return {
    bettingCart,
    calculateTotalPriceOfCartGames,
    getTotalCalculatedPrice,
    handleClickToRemoveBet,
    handleClickToSaveUserBets,
  }
}
