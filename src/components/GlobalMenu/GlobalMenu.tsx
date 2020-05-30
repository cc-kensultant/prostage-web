/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React, { useState, FC, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { firebase } from '../../utils/firebase'
import ProstageLogo from '../../images/ProstageLogo.svg'
import Notice from '../../images/notifications_none_24px.svg'
import Email from '../../images/mail_outline_24px.svg'
import { Context, ContextModal } from '../../types/contextType'
import { SignIn } from '../SignIn'
import { SignUp } from '../SignUp'

export const GlobalMenu: FC = () => {
  const context = React.useContext(Context)
  const [modal, setModal] = useState('')
  const setModalState = (name: string) => {
    setModal(name)
  }
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
      <ContextModal.Provider value={{ modal, setModalState }}>
        <ul id="nav" css={styles.nav}>
          <li css={styles.img}>
            <Link to="">
              <img src={ProstageLogo} alt="Prostage" />
            </Link>
          </li>
          {context.isSignin && (
            <Fragment>
              <li css={styles.mypage}>
                <Link to="/">マイページ</Link>
              </li>
              <li css={styles.mypage}>
                <Link to="/">スキル一覧</Link>
              </li>
              <li css={styles.mypage}>
                <Link to="/">スライド検索</Link>
              </li>
              <li css={styles.mypage}>
                <Link to="/">コミュニティ</Link>
              </li>
              <li css={styles.userMenu}>
                <Link to="/">メニュー(未)</Link>
              </li>
              <li css={styles.signout}>
                <button type="button" onClick={signOut}>
                  ログアウト
                </button>
              </li>
              <li css={styles.notice}>
                <Link to="/">
                  <label>2</label>
                  <img src={Notice} alt="notice" />
                </Link>
              </li>
              <li css={styles.email}>
                <Link to="/">
                  <label>2</label>
                  <img src={Email} alt="email" />
                </Link>
              </li>
            </Fragment>
          )}
          {!context.isSignin && (
            <Fragment>
              <li css={styles.plan}>
                <Link to="/">法人プラン</Link>
              </li>
              <li>
                <button
                  type="button"
                  css={styles.signinBtn}
                  onClick={() => {
                    setModal('signin')
                  }}
                >
                  ログイン
                </button>
                {modal === 'signin' && <SignIn />}
              </li>
              <li>
                <button
                  type="button"
                  css={styles.signupBtn}
                  onClick={() => {
                    setModal('signup')
                  }}
                >
                  無料会員登録
                </button>
                {modal === 'signup' && <SignUp />}
              </li>
            </Fragment>
          )}
        </ul>
      </ContextModal.Provider>
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
  mypage: css`
    margin-left: 32px;
    height: 34px;
    cursor: pointer;
    text-align: center;
    a {
      font-family: Mplus 1p;
      display: block;
      text-decoration: unset;
      font-weight: normal;
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
  userMenu: css`
    margin-left: auto;
    width: 104px;
    height: 34px;
    text-align: center;
    margin-right: 24px;
    height: 34px;
    a {
      font-family: Mplus 1p;
      display: block;
      text-decoration: unset;
      font-weight: normal;
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
  notice: css`
    margin-left: 8px;
    cursor: pointer;
    a {
      display: block;
      height: 34px;
      position: relative;
      border-radius: 17px;
      &:focus {
        outline: none;
        background: #f3f3f3;
      }
    }
    a label {
      position: absolute;
      z-index: 1;
      top: -3px;
      right: -3px;
      background: #ff0000;
      width: 20px;
      height: 20px;
      text-align: center;
      line-height: 20px;
      border-radius: 10px;
      font-family: Mplus 1p;
      font-size: 14px;
      color: #ffffff;
    }
    a img {
      padding: 5px;
      width: 24px;
      height: 24px;
      opacity: 0.54;
    }
  `,
  email: css`
    margin-left: 8px;
    cursor: pointer;
    a {
      display: block;
      height: 34px;
      position: relative;
      border-radius: 17px;
      &:focus {
        outline: none;
        background: #f3f3f3;
      }
    }
    a label {
      position: absolute;
      z-index: 1;
      top: -3px;
      right: -3px;
      background: #ff0000;
      width: 20px;
      height: 20px;
      text-align: center;
      line-height: 20px;
      border-radius: 10px;
      font-family: Mplus 1p;
      font-size: 14px;
      color: #ffffff;
    }
    a img {
      padding: 5px;
      width: 24px;
      height: 24px;
      opacity: 0.54;
    }
  `,
}
