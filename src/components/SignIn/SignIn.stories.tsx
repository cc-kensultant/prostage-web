import React, { FC, Fragment } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { SignIn } from './SignIn'

export default {
  title: 'SignIn',
  component: SignIn,
}

export const SignInModal: FC = () => {
  return (
    <Fragment>
      <div id="modal"></div>
      <Router>
        <SignIn />
      </Router>
    </Fragment>
  )
}
