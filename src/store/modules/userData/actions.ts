import { UserData } from './types'

export const createActionThatAddsNewUser = (userData: UserData) => {
  return {
    type: 'REGISTER_NEW_USER',
    payload: {
      userData,
    },
  }
}

export const createActionToRemoveUser = (token: string) => {
  return {
    type: 'REMOVE_USER',
    payload: {
      token,
    },
  }
}
