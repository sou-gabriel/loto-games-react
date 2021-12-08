export interface UserData {
  name?: string
  email: string
  password: string
}

export interface IAction {
  type: string
  payload: {
    userData: UserData
  }
}
