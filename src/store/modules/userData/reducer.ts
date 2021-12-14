import { IAction } from './types'

export const userDataReducer = (state = {}, action: IAction) => {
  switch (action.type) {
    case 'REGISTER_USER':
      return { userData: action.payload.userData }
    case 'REMOVE_USER':
      return { }
    default:
      return state
  }
}
