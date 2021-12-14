import { api } from './api'

import { showErrorMessage } from 'shared/utils/functions'

interface ICartGame {
  id: number
  type: string
  description: string
  range: number
  price: number
  max_number: number
  color: string
}

interface ICartGames {
  min_cart_value: number
  types: ICartGame[]
}

export const fetchCartGames = async () => {
  try {
    const response = await api.get<ICartGames>('/cart_games')

    return {
      minCartValue: response.data.min_cart_value,
      games: response.data.types,
    }
  } catch (error) {
    showErrorMessage(error)
  }
}
