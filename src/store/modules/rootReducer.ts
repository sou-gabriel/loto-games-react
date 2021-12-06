import { combineReducers } from 'redux'

import { availableGamesReducer } from './availableGames/reducer'
import { IAvailableGames } from './availableGames/types'

export const rootReducer = combineReducers({
  availableGames: availableGamesReducer,
})

export type RootState = { availableGames: IAvailableGames }
