import { IAvailableGames } from './types'

export const addAvailableGames = (availableGames: IAvailableGames) => {
  return {
    type: 'ADD_AVAILABLE_GAMES',
    payload: availableGames,
  }
}
