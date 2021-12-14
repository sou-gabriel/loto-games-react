import { api } from './api'

interface IUserData {
  email?: string
  password?: string
}

export const login = async (userData: IUserData) => {
  try {
    const response = await api.post('/login', userData)

    const token = response.data.token.token
    const data = response.data.user

    return {
      token,
      data,
    }
  } catch (error) {
    alert(error)
  }
}

export const changePassword = async (token: string | null, userData: IUserData) => {
  try {
    api.post(`/reset/${token}`, userData)
  } catch (error) {
    alert(error)
  }
}

export const resetPassword = async (userData: IUserData) => {
  try {
    const response = await api.post('http://127.0.0.1:3333/reset', userData)
    return {
      token: response.data.token,
    }
  } catch (error) {
    alert(error)
  }
}
