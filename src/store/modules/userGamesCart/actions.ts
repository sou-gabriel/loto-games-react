import { IGame } from './types'

export const createActionToAddGameToCart = (game: IGame) => {
  return {
    type: 'ADD_GAME_TO_CART',
    payload: {
      game
    }
  }
}

export const createActionToRemoveGameFromCart = (id: number) => {
  return {
    type: 'REMOVE_GAME_FROM_CART',
    payload: {
      id
    }
  }
}

export const createActionToRemoveAllGames = () => {
  return {
    type: 'REMOVE_ALL_GAMES'
  }
}
