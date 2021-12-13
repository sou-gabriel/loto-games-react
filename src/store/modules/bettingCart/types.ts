export interface IBet {
  id: string
  gameId: number
  type: string
  color: string
  price: number
  chosenNumbers: number[]
}

export interface IAction {
  type: string
  payload: {
    bet?: IBet
    id?: string
  }
}
