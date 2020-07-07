type userState = {
  isSignin: boolean
}

type userAction = {
  type: string
}

export const userReducer = (state: userState, action: userAction) => {
  switch (action.type) {
    case 'SIGN_IN':
      state.isSignin = true
      return {
        ...state,
      }
    case 'SIGN_OUT':
      state.isSignin = false
      return {
        ...state,
      }
    default:
      return state
  }
}
