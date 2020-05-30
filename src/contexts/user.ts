import React from 'react'
import { user } from '../types/contextType'

export const UserContext = React.createContext<user>({
  isSignin: false,
  setUserState: () => {},
})
