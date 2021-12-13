import { combineReducers } from 'redux'

import { userDataReducer } from './userData/reducer'
import { bettingCartReducer } from './bettingCart/reducer'
import { gameOptionsReducer } from './gameOptions/reducer'
import { minCartValueReducer } from './minCartValue/reducer'
import { activeGameOptionReducer } from './activeGameOption/reducer'

import { IGameOption } from './gameOptions/types'
import { IBet } from './bettingCart/types'
import { IActiveGameOption } from './activeGameOption/types'

export const rootReducer = combineReducers({
  userData: userDataReducer,
  gameOptions: gameOptionsReducer,
  bettingCart: bettingCartReducer,
  minCartValue: minCartValueReducer,
  activeGameOption: activeGameOptionReducer,
})

export type RootState = {
  gameOptions: IGameOption[]
  bettingCart: IBet[]
  minCartValue: number
  activeGameOption: IActiveGameOption
}
