/** @jsx jsx */
import { useState, useEffect } from 'react'
import { GlobalMenu } from './components/GlobalMenu'
import { Top } from './pages/Top'
import { SignIn } from './pages/SignIn'
import { firebase } from './utils/firebase'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { jsx } from '@emotion/core'
import { Context } from './types/contextType'

const App = () => {
  const [user, setUser] = useState(false)
  const setUserState = (state: boolean) => {
    setUser(state)
  }
  useEffect(() => {
    firebase.auth().onAuthStateChanged((userData) => {
      if (userData) {
        setUser(true)
      } else {
        setUser(false)
      }
    })
  }, [])
  return (
    <Router>
      <Context.Provider value={{ isSignin: user, setUserState }}>
        <GlobalMenu />
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
          <Route exact path="/sign-in">
            <SignIn />
          </Route>
        </Switch>
      </Context.Provider>
    </Router>
  )
}

export default App
