import React, { FC, Fragment } from 'react'
import { action } from '@storybook/addon-actions'
import { BrowserRouter as Router } from 'react-router-dom'

import { GlobalMenu } from './GlobalMenu'

export default {
  title: 'GlobalMenu',
  component: GlobalMenu,
}
export const LoggedIn: FC = () => {
  return (
    <Fragment>
      <div id="modal"></div>
      <Router>
        <GlobalMenu isSignin={true} onSignOut={action('button-click')} />
      </Router>
    </Fragment>
  )
}

export const LoggedOut: FC = () => {
  return (
    <Fragment>
      <div id="modal"></div>
      <Router>
        <GlobalMenu isSignin={false} onSignOut={action('button-click')} />
      </Router>
    </Fragment>
  )
}
