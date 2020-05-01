/** @jsx jsx */
import { useState, useEffect } from 'react'
import { GlobalMenu } from './components/GlobalMenu'
import { Top } from './pages/Top'
import { SignIn } from './pages/SignIn'
import { SignUp } from './pages/SignUp'
import firebase from './utils/firebase'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { jsx } from '@emotion/core'

const App = () => {
  const [user, setUser] = useState(false)
  // ログイン状態更新
  function setUserState(state: boolean) {
    setUser(state)
  }
  useEffect(() => {
    // マウント時セッション確認
    firebase.auth().onAuthStateChanged(function (userData) {
      if (userData) {
        setUser(true)
      } else {
        setUser(false)
      }
    })
  })
  return (
    <Router>
      <GlobalMenu isSignin={user} setUserState={setUserState} />
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
        <Route exact path="/sign-in">
          <SignIn setUserState={setUserState} />
        </Route>
        <Route exact path="/sign-up">
          <SignUp setUserState={setUserState} />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
