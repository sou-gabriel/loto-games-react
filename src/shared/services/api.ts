import axios from 'axios'

import { getUserToken } from 'shared/utils/functions'

const api = axios.create({
  baseURL: 'http://127.0.0.1:3333',
  headers: {
    'Content-Type': 'application/json',
  },
})

api.interceptors.request.use((config) => {
  const token = getUserToken()

  if (config.headers) {
    config.headers.Authorization = `Bearer ${token}`
  }

  return config
})

export { api }
