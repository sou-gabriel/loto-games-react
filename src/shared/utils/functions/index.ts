import toast from 'react-hot-toast'

interface Feedback {
  type: 'success' | 'error'
  message: string
}

export const showFeedbackMessage = ({ message, type }: Feedback) => {
  toast.remove()

  if (type === 'success') {
    toast.success(message)
    return
  }

  toast.error(message)
}

export const getErrorMessage = (error: unknown) =>
  error instanceof Error ? error.message : 'Erro desconhecido'

export const getUserToken = () => {
  return localStorage.getItem('token')
}

export const getFormattedGamePrice = (gamePrice: number) => {
  return new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL'
  }).format(gamePrice)
}
