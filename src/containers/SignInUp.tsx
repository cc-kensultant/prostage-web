/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React, { FC, useState, useEffect, Fragment } from 'react'
import { firebase } from '../utils/firebase'
import { useHistory } from 'react-router-dom'
import { UserStore } from '../contexts/userStore'
import { SignIn } from '../components/SignIn'
import { SignUp } from '../components/SignUp'

export const SignInUpContainer: FC = () => {
  const { userState, dispatch } = React.useContext(UserStore)
  const history = useHistory()
  const [isSignInOpen, setSignInModal] = useState(false)
  const [isSignUpOpen, setSignUpModal] = useState(false)
  const [signInState, setSignInState] = useState({
    email: '',
    pass: '',
  })
  const [signUpstate, setSignUpState] = useState({
    email: '',
    pass: '',
    passConf: '',
  })
  const [signInValidate, setSignInValidate] = useState(false)
  const [signUpValidate, setSignUpValidate] = useState(false)
  const onSignInOpen = () => {
    setSignInModal(true)
  }
  const onSignUpOpen = () => {
    setSignUpModal(true)
  }
  const onSignInClose = () => {
    setSignInState({
      email: '',
      pass: '',
    })
    setSignInModal(false)
  }
  const onSignUpClose = () => {
    setSignUpState({
      email: '',
      pass: '',
      passConf: '',
    })
    setSignUpModal(false)
  }
  const onSignInChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSignInState({ ...signInState, [event.target.name]: event.target.value })
  }
  const onSignUpChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSignUpState({ ...signUpstate, [event.target.name]: event.target.value })
  }
  const onSignInSubmit = async () => {
    if (!signInValidate) return
    try {
      await firebase.auth().signInWithEmailAndPassword(signInState.email, signInState.pass)
      // TODO: IDトークンの取得/保持 firebase.auth().currentUser.getIdToken()
      // TODO:トースト通知など検討
      alert('ログインに成功しました。')
      if (userState.isSignin) return
      dispatch({
        type: 'SIGN_IN',
      })
      onSignInClose()
      // TODO:ログイン後ページに移動
      // TODO:モーダルからだと遷移できない？ルート経由ではないため？要調査
      history.push('/dashboard')
    } catch {
      // TODO:トースト通知など検討
      alert('ログインに失敗しました。')
    }
  }
  const onSignUpSubmit = async () => {
    if (!signUpValidate) return
    try {
      await firebase.auth().createUserWithEmailAndPassword(signUpstate.email, signUpstate.pass)
      // TODO:トースト通知など検討
      alert('アカウント登録に成功しました。')
      if (userState.isSignin) return
      dispatch({
        type: 'SIGN_IN',
      })
      onSignUpClose()
      // TODO:新規登録後ページに移動
      history.push('/dashboard')
    } catch {
      // TODO:トースト通知など検討
      alert('アカウント登録に失敗しました。')
    }
  }
  const onSignUpLink = () => {
    onSignInClose()
    onSignUpOpen()
  }
  const onSignInLink = () => {
    onSignUpClose()
    onSignInOpen()
  }
  useEffect(() => {
    if (userState.isSignin) return
    setSignInValidate(signInState.email !== '' && signInState.pass !== '')
  }, [signInState.email, signInState.pass, userState.isSignin])
  useEffect(() => {
    if (userState.isSignin) return
    setSignUpValidate(
      signUpstate.email !== '' && signUpstate.pass !== '' && signUpstate.passConf !== '',
    )
  }, [signUpstate.email, signUpstate.pass, signUpstate.passConf, userState.isSignin])
  return (
    <Fragment>
      <li css={styles.nav.list}>
        <button type="button" css={styles.signinBtn} onClick={onSignInOpen}>
          ログイン
        </button>
        <SignIn
          isOpen={isSignInOpen}
          onClose={onSignInClose}
          onChange={onSignInChange}
          isValidate={signInValidate}
          onSubmit={onSignInSubmit}
          onSignUpLink={onSignUpLink}
        />
      </li>
      <li css={styles.nav.list}>
        <button type="button" css={styles.signupBtn} onClick={onSignUpOpen}>
          無料会員登録
        </button>
        <SignUp
          isOpen={isSignUpOpen}
          onClose={onSignUpClose}
          onChange={onSignUpChange}
          isValidate={signUpValidate}
          onSubmit={onSignUpSubmit}
          onSignInLink={onSignInLink}
        />
      </li>
    </Fragment>
  )
}

const styles = {
  nav: {
    list: css`
      height: 100%;
    `,
  },
  signinBtn: css`
    width: 82px;
    height: 34px;
    cursor: pointer;
    padding: unset;
    margin-right: 24px;
    font-weight: 900;
    font-size: 14px;
    line-height: 34px;
    letter-spacing: 0.1em;
    color: #555555;
    border: unset;
    background: #ffffff;
    &:focus {
      outline: none;
      background: #f3f3f3;
    }
  `,
  signupBtn: css`
    display: block;
    text-align: center;
    text-decoration: unset;
    width: 169px;
    height: 34px;
    background: #1890ff;
    border-radius: 3px;
    font-weight: 900;
    font-size: 14px;
    line-height: 34px;
    letter-spacing: 0.1em;
    color: #fffdfd;
    cursor: pointer;
    border: unset;
    transition: background 0.2s;
    outline: none;
    &:focus {
      background: #096dd9;
    }
    &:hover {
      background: #096dd9;
    }
  `,
}
