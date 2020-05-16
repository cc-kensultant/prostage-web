import React, { FC } from 'react'
import { Context } from '../../types/contextType'
import { BrowserRouter as Router } from 'react-router-dom'

import { GlobalMenu } from './GlobalMenu'

export default {
  title: 'GlobalMenu',
  component: GlobalMenu,
}

export const LoggedIn: FC = () => {
  const setUserState = () => {}
  return (
    <Router>
      <Context.Provider value={{ isSignin: true, setUserState }}>
        <GlobalMenu />
      </Context.Provider>
    </Router>
  )
}

export const LoggedOut: FC = () => {
  const setUserState = () => {}
  return (
    <Router>
      <Context.Provider value={{ isSignin: false, setUserState }}>
        <GlobalMenu />
      </Context.Provider>
    </Router>
  )
}
