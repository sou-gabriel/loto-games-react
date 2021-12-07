import { IAction, IGame } from './types'

export const cartReducer = (state: IGame[] = [], action: IAction) => {
  switch (action.type) {
    case 'ADD_GAME_TO_CART':
      return [...state, action.payload.game]
    case 'REMOVE_GAME':
      return state.filter(game => game.id !== action.payload.id)
    default:
      return state
  }
}
