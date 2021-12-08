export interface IGameOption {
  id: number
  type: string
  description: string
  range: number
  price: number
  max_number: number
  color: string
}

export interface IGameOptions {
  min_cart_value: number
  types: IGameOption[]
}

export interface IAction {
  type: string
  payload: {
    gameOptions: IGameOption[]
  }
}
