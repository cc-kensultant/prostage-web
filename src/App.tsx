/** @jsx jsx */
import { useState, useEffect } from 'react'
import { GlobalMenu } from './components/GlobalMenu'
import { Top } from './pages/Top'
import { SignIn } from './pages/SignIn'
import { SignUp } from './pages/SignUp'
import { firebase } from './utils/firebase'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { jsx } from '@emotion/core'
import { UserContext } from './contexts/user'
import { ModalContext } from './contexts/modal'

const App = () => {
  const [user, setUser] = useState(false)
  const [modal, setModal] = useState('')
  const setUserState = (state: boolean) => {
    setUser(state)
  }
  const setModalState = (state: string) => {
    setModal(state)
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
      <UserContext.Provider value={{ isSignin: user, setUserState }}>
        <ModalContext.Provider value={{ modalMode: modal, setModalState }}>
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
            <Route exact path="/sign-up">
              <SignUp />
            </Route>
          </Switch>
        </ModalContext.Provider>
      </UserContext.Provider>
    </Router>
  )
}

export default App
