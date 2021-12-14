import { IAction, IBet } from './types'

export const bettingCartReducer = (state: IBet[] = [], action: IAction) => {
  switch (action.type) {
    case 'ADD_GAME_TO_CART':
      console.log(action.payload.bet)
      return [...state, action.payload.bet]
    case 'REMOVE_GAME_FROM_CART':
      return state.filter(bet => bet.id !== action.payload.id)
    case 'REMOVE_ALL_GAMES':
      return []
    default:
      return state
  }
}
