/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { firebase } from '../../utils/firebase'
import ProstageLogo from '../../images/ProstageLogo.svg'
import { Context } from '../../types/contextType'
import { SignIn } from '../SignIn'

export const GlobalMenu: FC = () => {
  const context = React.useContext(Context)
  const signOut = () => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        try {
          await firebase.auth().signOut()
          alert('ログアウトしました')
          context.setUserState(false)
        } catch {
          alert('ログアウトに失敗しました')
        }
      }
    })
  }
  return (
    <header css={styles.base}>
      <ul id="nav" css={styles.nav}>
        <li css={styles.img}>
          <Link to="">
            <img src={ProstageLogo} alt="Prostage" />
          </Link>
        </li>
        <li css={styles.plan}>
          <Link to="/">法人プラン</Link>
        </li>
        {!context.isSignin && <SignIn />}
        {!context.isSignin && (
          <li css={styles.btn}>
            <Link to="/sign-up">無料会員登録</Link>
          </li>
        )}
        {context.isSignin && (
          <li css={styles.signout}>
            <button type="button" onClick={signOut}>
              ログアウト
            </button>
          </li>
        )}
      </ul>
    </header>
  )
}

const styles = {
  base: css`
    position: sticky;
    top: 0;
    background: #fff;
    box-shadow: 2px 0px 8px rgba(0, 0, 0, 0.12);
    z-index: 1;
  `,
  nav: css`
    height: 34px;
    padding: 13px 24px;
    margin: unset;
    display: flex;
    align-items: center;
    list-style: none;
    li {
      height: 100%;
    }
  `,
  img: css`
    margin-left: 8px;
    cursor: pointer;
    a {
      display: block;
      height: 34px;
      &:focus {
        outline: none;
        background: #f3f3f3;
      }
    }
    a img {
      max-width: 60px;
      height: 34px;
    }
  `,
  plan: css`
    margin-right: 44px;
    margin-left: auto;
    width: 82px;
    height: 34px;
    cursor: pointer;
    text-align: center;
    a {
      display: block;
      text-decoration: unset;
      font-weight: 900;
      font-size: 14px;
      line-height: 34px;
      letter-spacing: 0.1em;
      color: #555555;
      &:focus {
        outline: none;
        background: #f3f3f3;
      }
    }
  `,
  btn: css`
    a {
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
    }
  `,
  signout: css`
    width: 82px;
    height: 34px;
    text-align: center;
    margin-right: 24px;
    button {
      cursor: pointer;
      padding: unset;
      text-decoration: unset;
      font-weight: 900;
      font-size: 14px;
      line-height: 34px;
      letter-spacing: 0.1em;
      color: #555555;
      background: none;
      border: none;
      &:focus {
        outline: none;
        background: #f3f3f3;
      }
    }
  `,
}
