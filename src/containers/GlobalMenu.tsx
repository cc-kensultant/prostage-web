/** @jsx jsx */
import { jsx } from '@emotion/core'
import React, { FC } from 'react'
import { firebase } from '../utils/firebase'
import { useHistory } from 'react-router-dom'
import { GlobalMenu } from '../components/GlobalMenu'
import { UserStore } from '../contexts/userStore'

export const GlobalMenuContainer: FC = () => {
  const { userState } = React.useContext(UserStore)
  const history = useHistory()
  const signOut = () => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        try {
          if (!userState.isSignin) return
          await firebase.auth().signOut()
          alert('ログアウトしました')
          history.push('/')
        } catch {
          alert('ログアウトに失敗しました')
        }
      }
    })
  }
  return <GlobalMenu isSignin={userState.isSignin} onSignOut={signOut} />
}
