import { IAction } from './types'

export const minCartValueReducer = (state = 0, action: IAction) => {
  switch (action.type) {
    case 'SET_MIN_CART_VALUE':
      return action.payload.minCartValue
    default:
      return state
  }
}
