export interface IActiveGameOption {
  id: number
  type: string
  description: string
  range: number
  price: number
  max_number: number
  color: string
}

export interface IAction {
  type: string
  payload: {
    game: IActiveGameOption
  }
}
