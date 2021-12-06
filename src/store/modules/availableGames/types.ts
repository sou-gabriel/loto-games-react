export interface IAvailableGame {
  id: number
  type: string
  description: string
  range: number
  price: number
  max_number: number
  color: string
}

export interface IAvailableGames {
  min_cart_value: number
  types: IAvailableGame[]
}

export interface IAction {
  type: string
  payload: IAvailableGames
}
