import { IGameOption } from './types'

export const createActionToSetGameOptions = (gameOptions: IGameOption[]) => {
  return {
    type: 'ADD_GAME_OPTIONS',
    payload: {
      gameOptions,
    },
  }
}
