import { UserData } from './types'

export const createNewUserAction = (userData: UserData) => {
  return {
    type: 'REGISTER_NEW_USER',
    payload: {
      userData
    }
  }
}

export const createRemoveUserOption = (userData: null) => {
  return {
    type: 'REMOVE_USER',
    payload: {
      userData
    }
  }
}
