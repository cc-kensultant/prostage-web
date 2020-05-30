import React, { FC, Fragment } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { SignUp } from './SignUp'

export default {
  title: 'SignUp',
  component: SignUp,
}

export const SignUpModal: FC = () => (
  <Fragment>
    <div id="modal"></div>
    <Router>
      <SignUp />
    </Router>
  </Fragment>
)
