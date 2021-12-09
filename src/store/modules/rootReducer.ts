import { combineReducers } from 'redux'

import { userDataReducer } from './userData/reducer'
import { gameOptionsReducer } from './gameOptions/reducer'
import { IGameOption } from './gameOptions/types'
import { userGamesCartReducer } from './userGamesCart/reducer'
import { IGame } from './userGamesCart/types'
import { minCartValueReducer } from './minCartValue/reducer'
import { activeGameOptionReducer } from './activeGameOption/reducer'
import { IActiveGameOption } from './activeGameOption/types'

export const rootReducer = combineReducers({
  userData: userDataReducer,
  gameOptions: gameOptionsReducer,
  userGamesCart: userGamesCartReducer,
  minCartValue: minCartValueReducer,
  activeGameOption: activeGameOptionReducer,
})

export type RootState = {
  gameOptions: IGameOption[]
  userGamesCart: IGame[]
  minCartValue: number
  activeGameOption: IActiveGameOption
}
