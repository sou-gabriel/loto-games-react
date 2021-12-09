import { useCallback, MouseEvent } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'

import {
  createActionToRemoveGameFromCart,
  createActionToRemoveAllGames,
} from 'store/modules/userGamesCart/actions'
import { RootState } from 'store/modules/rootReducer'
import { showFeedbackMessage, getErrorMessage } from 'utils/functions'

interface IUserGamesCart {
  id: number
  color: string
  name: string
  numbers: number[]
  price: number
}

interface IUseBetCart {
  userGamesCart: IUserGamesCart[]
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
  const userGamesCart: IUserGamesCart[] = useSelector(
    (state: RootState) => state.userGamesCart,
  )
  const minCartValue = useSelector((state: RootState) => state.minCartValue)
  const dispatch = useDispatch()

  const getFormattedGamePrice = useCallback((gamePrice: number) => {
    return new Intl.NumberFormat('pt-br', {
      style: 'currency',
      currency: 'BRL',
    }).format(gamePrice)
  }, [])

  const calculateTotalPriceOfCartGames = useCallback(
    () => userGamesCart.reduce((acc, game) => acc + game.price, 0),
    [userGamesCart],
  )

  const getTotalCalculatedPrice = useCallback(() => {
    const totalPrice = calculateTotalPriceOfCartGames()
    return getFormattedGamePrice(totalPrice)
  }, [calculateTotalPriceOfCartGames, getFormattedGamePrice])

  const getUserToken = useCallback(() => {
    return localStorage.getItem('token')
  }, [])

  const getTransformedCartGames = useCallback(
    () => userGamesCart.map(({ id, numbers }) => ({ id, numbers })),
    [userGamesCart],
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

      dispatch(createActionToRemoveAllGames())
      showFeedbackMessage({
        type: 'success',
        message: 'Jogos salvos com sucesso!',
      })
    } catch (error) {
      console.log('Opa?')
      const message = getErrorMessage(error)

      showFeedbackMessage({
        type: 'error',
        message,
      })
    }
  }

  const handleClickToRemoveBet = (event: MouseEvent<SVGElement>) => {
    const idDataValue = Number((event.target as SVGElement).dataset.id) || 0
    dispatch(createActionToRemoveGameFromCart(idDataValue))
  }

  const handleClickToSaveUserBets = () => {
    const totalPriceOfCartBets = calculateTotalPriceOfCartGames()
    const transformedUserGamesCart = getTransformedCartGames()
    const userToken = getUserToken()

    if (totalPriceOfCartBets >= minCartValue) {
      const data = { games: transformedUserGamesCart }
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
      message: `É necessário ter no carrinho pelo menos ${getFormattedGamePrice(minCartValue)} em jogos.`,
    })
  }

  return {
    userGamesCart,
    calculateTotalPriceOfCartGames,
    getTotalCalculatedPrice,
    handleClickToRemoveBet,
    handleClickToSaveUserBets,
  }
}
