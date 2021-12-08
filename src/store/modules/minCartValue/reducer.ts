import { IAction } from './types'

export const minCartValueReducer = (state = {}, action: IAction) => {
  switch (action.type) {
    case 'SET_MIN_CART_VALUE':
      return { minCartValue: action.payload.minCartValue }
    default:
      return state
  }
}
