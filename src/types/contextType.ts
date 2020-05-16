import React from 'react'

export type contextType = {
  isSignin: boolean
  setUserState: (state: boolean) => void
}

export const Context = React.createContext<contextType>({
  isSignin: false,
  setUserState: () => {},
})
