/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { FC, useState, Fragment } from 'react'
import { action } from '@storybook/addon-actions'
import { BrowserRouter as Router } from 'react-router-dom'

import { SignIn } from './SignIn'

export default {
  title: 'SignIn',
  component: SignIn,
}

export const ValidateTrue: FC = () => {
  // 初期値trueだと<div id="modal">が見つからなくてエラーになる
  const [isOpen, setModal] = useState(false)
  const onSignInOpen = () => {
    setModal(true)
  }
  return (
    <Fragment>
      <div id="modal"></div>
      <Router>
        <ul id="nav" css={styles.nav.base}>
          <li css={styles.nav.list}>
            <button type="button" css={styles.signinBtn} onClick={onSignInOpen}>
              ログイン
            </button>
            <SignIn
              isOpen={isOpen}
              onClose={() => {
                setModal(false)
              }}
              onChange={action('on-change')}
              isValidate={true}
              onSubmit={action('clicked')}
              onSignUpLink={action('link-clicked')}
            />
          </li>
        </ul>
      </Router>
    </Fragment>
  )
}

export const ValidateFalse: FC = () => {
  // 初期値trueだと<div id="modal">が見つからなくてエラーになる
  const [isOpen, setModal] = useState(false)
  const onSignInOpen = () => {
    setModal(true)
  }
  return (
    <Fragment>
      <div id="modal"></div>
      <Router>
        <ul id="nav" css={styles.nav.base}>
          <li css={styles.nav.list}>
            <button type="button" css={styles.signinBtn} onClick={onSignInOpen}>
              ログイン
            </button>
            <SignIn
              isOpen={isOpen}
              onClose={() => {
                setModal(false)
              }}
              onChange={action('on-change')}
              isValidate={false}
              onSubmit={action('clicked')}
              onSignUpLink={action('link-clicked')}
            />
          </li>
        </ul>
      </Router>
    </Fragment>
  )
}

const styles = {
  nav: {
    base: css`
      height: 34px;
      padding: 13px 24px;
      margin: unset;
      display: flex;
      align-items: center;
      list-style: none;
    `,
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
}
