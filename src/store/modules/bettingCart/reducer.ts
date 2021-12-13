import { IAction, IBet } from './types'

export const bettingCartReducer = (state: IBet[] = [], action: IAction) => {
  switch (action.type) {
    case 'ADD_GAME_TO_CART': {
      const newBet = action.payload.bet
      const newBetNumbersSorted = newBet?.numbers
        .map((number) => number)
        .sort((b, a) => b - a)

      return [...state, { ...newBet, numbers: newBetNumbersSorted }]
    }
    case 'REMOVE_GAME_FROM_CART': {
      return state.filter((game) => game.id !== action.payload.id)
    }
    case 'REMOVE_ALL_GAMES': {
      return []
    }
    default: {
      return state
    }
  }
}
