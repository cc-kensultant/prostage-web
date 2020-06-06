/** @jsx jsx */
import { jsx } from '@emotion/core'
import React, { FC } from 'react'
import { firebase } from '../utils/firebase'
import { GlobalMenu } from '../components/GlobalMenu'
import { UserContext } from '../contexts/user'

export const GlobalMenuContainer: FC = () => {
  const { isSignin, setUserState } = React.useContext(UserContext)
  const signOut = () => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        try {
          await firebase.auth().signOut()
          alert('ログアウトしました')
          setUserState(false)
        } catch {
          alert('ログアウトに失敗しました')
        }
      }
    })
  }
  return <GlobalMenu isSignin={isSignin} onSignOut={signOut} />
}
