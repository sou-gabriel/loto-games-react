import { IAction } from './types'

export const activeGameOptionReducer = (state = {}, action: IAction) => {
  switch (action.type) {
    case 'SET_ACTIVE_GAME':
      return action.payload.game
    default:
      return state
  }
}
