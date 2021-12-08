export const createActionToSetMinimumCartValue = (minCartValue: number) => {
  return {
    type: 'SET_MIN_CART_VALUE',
    payload: {
      minCartValue,
    },
  }
}
