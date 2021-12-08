import { IGame } from './types'

export const createActionToAddGameToCart = (game: IGame) => {
  return {
    type: 'ADD_GAME_TO_CART',
    payload: {
      game,
    },
  }
}

export const createActionToRemoveGameFromCart = (id: string) => {
  return {
    type: 'REMOVE_GAME_FROM_CART',
    payload: {
      id,
    },
  }
}
