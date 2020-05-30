import React, { FC, Fragment } from 'react'
import { UserContext } from '../../contexts/user'
import { BrowserRouter as Router } from 'react-router-dom'

import { GlobalMenu } from './GlobalMenu'

export default {
  title: 'GlobalMenu',
  component: GlobalMenu,
}
export const LoggedIn: FC = () => {
  const setUserState = () => {}
  return (
    <Fragment>
      <div id="modal"></div>
      <Router>
        <UserContext.Provider value={{ isSignin: true, setUserState }}>
          <GlobalMenu />
        </UserContext.Provider>
      </Router>
    </Fragment>
  )
}

export const LoggedOut: FC = () => {
  const setUserState = () => {}
  return (
    <Fragment>
      <div id="modal"></div>
      <Router>
        <UserContext.Provider value={{ isSignin: false, setUserState }}>
          <GlobalMenu />
        </UserContext.Provider>
      </Router>
    </Fragment>
  )
}
