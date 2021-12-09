export interface IGame {
  id: number
  name: string
  numbers: number[]
  price: number
  color: string
}

export interface IAction {
  type: string
  payload: {
    game?: IGame
    id?: number
  }
}
