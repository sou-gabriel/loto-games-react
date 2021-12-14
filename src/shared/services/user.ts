import { api } from './api'

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
    alert(error)
  }
}
