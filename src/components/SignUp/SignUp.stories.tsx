/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { FC, useState, Fragment } from 'react'
import { action } from '@storybook/addon-actions'
import { BrowserRouter as Router } from 'react-router-dom'

import { SignUp } from './SignUp'

export default {
  title: 'SignUp',
  component: SignUp,
}

export const ValidateTrue: FC = () => {
  // 初期値trueだと<div id="modal">が見つからなくてエラーになる
  const [isOpen, setModal] = useState(false)
  const onSignUpOpen = () => {
    setModal(true)
  }
  return (
    <Fragment>
      <div id="modal"></div>
      <Router>
        <ul id="nav" css={styles.nav.base}>
          <li css={styles.nav.list}>
            <button type="button" css={styles.signupBtn} onClick={onSignUpOpen}>
              無料会員登録
            </button>
            <SignUp
              isOpen={isOpen}
              onClose={() => {
                setModal(false)
              }}
              onChange={action('on-change')}
              isValidate={true}
              onSubmit={action('clicked')}
              onSignInLink={action('link-clicked')}
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
  const onSignUpOpen = () => {
    setModal(true)
  }
  return (
    <Fragment>
      <div id="modal"></div>
      <Router>
        <ul id="nav" css={styles.nav.base}>
          <li css={styles.nav.list}>
            <button type="button" css={styles.signupBtn} onClick={onSignUpOpen}>
              無料会員登録
            </button>
            <SignUp
              isOpen={isOpen}
              onClose={() => {
                setModal(false)
              }}
              onChange={action('on-change')}
              isValidate={false}
              onSubmit={action('clicked')}
              onSignInLink={action('link-clicked')}
            />
          </li>
        </ul>
      </Router>
    </Fragment>
  )
}

const styles = {
  nav: {
    list: css`
      height: 100%;
    `,
    base: css`
      height: 34px;
      padding: 13px 24px;
      margin: unset;
      display: flex;
      align-items: center;
      list-style: none;
    `,
  },
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
