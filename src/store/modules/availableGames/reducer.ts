import { IAction } from './types'

export const availableGamesReducer = (state = {}, action: IAction) => {
  switch (action.type) {
    case 'ADD_AVAILABLE_GAMES':
      return action.payload
    default:
      return state
  }
}
