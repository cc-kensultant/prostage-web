import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import { SignIn } from './SignIn'

export default {
  title: 'SignIn',
  component: SignIn,
}

export const Default = () => {
  return (
    <Router>
      <SignIn />
    </Router>
  )
}
