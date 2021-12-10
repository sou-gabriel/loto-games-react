import { IAction, IGame } from './types'

export const userGamesCartReducer = (state: IGame[] = [], action: IAction) => {
  switch (action.type) {
    case 'ADD_GAME_TO_CART':
      const newGame = action.payload.game
      const newGameNumbersSorted = newGame?.numbers
        .map((number) => number)
        .sort((b, a) => b - a)

      return [...state, { ...newGame, numbers: newGameNumbersSorted }]
    case 'REMOVE_GAME_FROM_CART':
      return state.filter((game) => game.id !== action.payload.id)
    case 'REMOVE_ALL_GAMES':
      return []
    default:
      return state
  }
}
