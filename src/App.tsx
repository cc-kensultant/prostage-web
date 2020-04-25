/** @jsx jsx */
// import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { GlobalMenu } from './components/GlobalMenu'
import { Top } from './pages/Top'
import { SignIn } from './pages/SignIn'
import { SignUp } from './pages/SignUp'

import { jsx, css } from '@emotion/core'

const App = () => {
  return (
    <Router>
      <div>
        <GlobalMenu />
        {/* メインコンテンツ */}
        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Top />
          </Route>
          <Route exact path="/SignIn">
            <SignIn />
          </Route>
          <Route exact path="/SignUp">
            <SignUp />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
