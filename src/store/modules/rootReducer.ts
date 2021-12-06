import { combineReducers } from 'redux'

import { availableGamesReducer } from './availableGames/reducer'

export type RootState = ReturnType<typeof rootReducer>

export const rootReducer = combineReducers({
  availableGames: availableGamesReducer
})

