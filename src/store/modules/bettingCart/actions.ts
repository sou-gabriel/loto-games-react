import { IBet } from './types'

export const createActionToAddNewBetToCart = (bet: IBet) => {
  return {
    type: 'ADD_GAME_TO_CART',
    payload: { bet },
  }
}

export const createActionToRemoveBetFromCart = (id: number) => {
  return {
    type: 'REMOVE_GAME_FROM_CART',
    payload: { id },
  }
}

export const createActionToRemoveAllBets = () => {
  return {
    type: 'REMOVE_ALL_GAMES',
  }
}
