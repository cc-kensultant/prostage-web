import { Dispatch } from 'react'

export type userStoreType = {
  userState: {
    isSignin: boolean
  }
  dispatch: Dispatch<any>
}
