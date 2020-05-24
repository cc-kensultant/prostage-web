import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { SignUp } from './SignUp'

export default {
  title: 'SignUp',
  component: SignUp,
}

export const Default = () => (
  <Router>
    <ul>
      <SignUp />
    </ul>
  </Router>
)
