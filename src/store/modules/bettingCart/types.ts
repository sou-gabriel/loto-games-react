export interface IBet {
  id: number
  name: string
  numbers: number[]
  price: number
  color: string
}

export interface IAction {
  type: string
  payload: {
    bet?: IBet
    id?: number
  }
}
