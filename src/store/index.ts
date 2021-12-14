import { createStore } from 'redux'

import { rootReducer } from './modules/rootReducer'

export default createStore(rootReducer)

export { createActionToSetActiveGameOption } from './modules/activeGameOption/actions'
export { activeGameOptionReducer } from './modules/activeGameOption/reducer'
export {
  createActionToAddNewBetToCart,
  createActionToRemoveBetFromCart,
  createActionToRemoveAllBetsFromCart,
} from './modules/bettingCart/actions'
export { createActionToSetGameOptions } from './modules/gameOptions/action'
export { gameOptionsReducer } from './modules/gameOptions/reducer'
export { createActionToSetMinimumCartValue } from './modules/minCartValue/actions'
export {
  createActionThatAddsNewUser,
  createActionToRemoveUser,
} from './modules/userData/actions'
