/** @jsx jsx */
import { useEffect, useReducer } from 'react'
import { GlobalMenuContainer } from './containers/GlobalMenu'
import { Top } from './pages/Top'
import { SignIn } from './pages/SignIn'
import { SignUp } from './pages/SignUp'
import { Dashboard } from './pages/Dashboard'
import { firebase } from './utils/firebase'
import { userReducer } from './utils/reducer'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { jsx } from '@emotion/core'
import { UserStore } from './contexts/userStore'

const initialize = {
  isSignin: false,
}

const App = () => {
  const [userState, dispatch] = useReducer(userReducer, initialize)
  useEffect(() => {
    firebase.auth().onAuthStateChanged((userData) => {
      if (userData) {
        dispatch({
          type: 'SIGN_IN',
        })
      } else {
        dispatch({
          type: 'SIGN_OUT',
        })
      }
    })
  }, [])
  return (
    <Router>
      <UserStore.Provider value={{ userState, dispatch }}>
        <GlobalMenuContainer />
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
          <Route exact path="/sign-up">
            <SignUp />
          </Route>
          <Route exact path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </UserStore.Provider>
    </Router>
  )
}

export default App
