import { combineReducers } from 'redux'

import { userDataReducer } from './userData/reducer'
import { gameOptionsReducer } from './gameOptions/reducer'
import { IGameOption } from './gameOptions/types'
import { userGameCartReducer } from './userGameCart/reducer'
import { IGame } from './userGameCart/types'
import { minCartValueReducer } from './minCartValue/reducer'

export const rootReducer = combineReducers({
  userData: userDataReducer,
  gameOptions: gameOptionsReducer,
  userGameCart: userGameCartReducer,
  minCartValue: minCartValueReducer,
})

export type RootState = {
  gameOptions: IGameOption[]
  userGameCart: IGame[]
  minCartValue: number
}
