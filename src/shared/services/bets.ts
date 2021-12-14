import { api } from './api'

interface IBet {
  choosen_numbers: string
  created_at: string
  game_id: number
  id: number
  price: 2
  type: {
    id: number
    type: string
  }
  user_id: number
}

interface IGame {
  id: number
  numbers: number[]
}

interface INewBets {
  games: IGame[]
}

export const fetchAllBets = async (params = '') => {
  try {
    const response = await api.get<IBet[]>(`/bet/all-bets?${params}`)
    return {
      allBets: response.data,
    }
  } catch (error) {
    alert(error)
  }
}

export const createNewBets = async (newBets: INewBets) => {
  try {
    api.post('/bet/new-bet', newBets)
  } catch (error) {
    alert(error)
  }
}
