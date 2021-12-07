import { IGame } from './types'

export const addGameToCart = (game: IGame) => {
  return {
    type: 'ADD_GAME_TO_CART',
    payload: {
      game,
    },
  }
}

export const removeGameFromCart = (id: string) => {
  return {
    type: 'REMOVE_GAME',
    payload: {
      id,
    },
  }
}
