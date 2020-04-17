/** @jsx jsx */
// import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { Top } from './pages/Top'

import { jsx, css } from '@emotion/core'

const style = css`
  color: red;
  border: 2px solid #fff;
`

const About = () => {
  return (
    <div>
      <h2 css={style}>About</h2>
    </div>
  )
}

const Dashboard = () => {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  )
}

const App = () => {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Top</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>

        <hr />

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
          <Route path="/about">
            <About />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
