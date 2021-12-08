import { combineReducers } from 'redux'

import { userDataReducer } from './userData/reducer'
import { availableGamesReducer } from './availableGames/reducer'
import { IAvailableGames } from './availableGames/types'
import { cartReducer } from './cartGames/reducer'
import { IGame } from './cartGames/types'

export const rootReducer = combineReducers({
  userData: userDataReducer,
  availableGames: availableGamesReducer,
  cartGames: cartReducer,
})

export type RootState = {
  availableGames: IAvailableGames
  cartGames: IGame[]
}
