import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

import { showFeedbackMessage } from 'utils/functions'

import {
  createNewUserAction,
  createRemoveUserOption,
} from 'store/modules/userData/actions'

interface UserData {
  name?: string
  email: string
  password: string
}

export const useAuth = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    localStorage.removeItem('token')
    dispatch(createRemoveUserOption(null))
  }, [dispatch])

  const storeUserData = (token: string, userData: UserData) => {
    localStorage.setItem('token', token)
    dispatch(createNewUserAction(userData))
  }

  const redirectUser = (route: string) => {
    navigate(route)
  }

  const fetchUser = async (url: string, userData: UserData) => {
    try {
      const response = await axios.post(url, userData)

      if (response.status !== 200) {
        throw new Error('Um erro de conexão ocorreu. Tente novamente!')
      }

      const token = response.data.token.token

      storeUserData(token, userData)
      redirectUser('/dashboard')
    } catch (error) {
      const message =
        error instanceof Error ? error.message : 'Erro desconhecido'

      showFeedbackMessage({
        type: 'error',
        message,
      })
    }
  }

  const clearFormFields = (formFields: HTMLInputElement[]) => {
    formFields.forEach(formField => {
      formField.value = ''
    })
  }

  return {
    fetchUser,
    clearFormFields,
  }
}
