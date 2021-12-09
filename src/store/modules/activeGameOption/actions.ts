import { IActiveGameOption } from './types'

export const createActionToSetActiveGameOption = (
  game: IActiveGameOption | null,
) => {
  return {
    type: 'SET_ACTIVE_GAME',
    payload: {
      game,
    },
  }
}
