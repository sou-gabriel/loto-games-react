import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import axios from 'axios'

import {
  createNewUserAction,
  createRemoveUserOption,
} from 'store/modules/userData/actions'

interface UserData {
  name?: string
  email: string
  password: string
}

interface Feedback {
  type: 'success' | 'error'
  message: string
}

export const useAuth = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    localStorage.removeItem('token')
    dispatch(createRemoveUserOption(null))
  }, [])

  const storeUserData = (token: string, userData: UserData) => {
    localStorage.setItem('token', token)
    dispatch(createNewUserAction(userData))
  }

  const redirectUser = (route: string) => {
    navigate(route)
  }

  const showFeedbackMessage = ({ message, type }: Feedback) => {
    toast.remove()

    if (type === 'success') {
      toast.success(message)
      return
    }

    toast.error(message)
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
