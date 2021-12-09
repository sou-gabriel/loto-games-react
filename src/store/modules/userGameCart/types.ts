export interface IGame {
  id: string
  name: string
  numbers: number[]
  price: number
  color: string
}

export interface IAction {
  type: string
  payload: {
    game?: IGame
    id?: string
  }
}