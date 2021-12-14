import { api } from './api'

import { showErrorMessage } from 'shared/utils/functions'

interface IUserData {
  name: string
  email: string
  password: string
}

export const registerUser = async (userData: IUserData) => {
  try {
    const response = await api.post('/user/create', userData)
    return {
      token: response.data.token.token,
      userData: response.data.user,
    }
  } catch (error) {
    showErrorMessage(error)
  }
}
