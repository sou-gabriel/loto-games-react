import { IAction } from './types'

export const gameOptionsReducer = (state = [], action: IAction) => {
  console.log(action)

  switch (action.type) {
    case 'ADD_GAME_OPTIONS':
      return action.payload.gameOptions
    default:
      return state
  }
}
