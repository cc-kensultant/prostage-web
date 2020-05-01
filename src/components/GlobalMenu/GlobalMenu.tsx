/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { FC } from 'react'
import { Link, useHistory } from 'react-router-dom'
import firebase from '../../utils/firebase'
import ProstageLogo from '../..//image/ProstageLogo.svg'

const head = {
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
  signin: css`
    width: 82px;
    height: 34px;
    text-align: center;
    cursor: pointer;
    margin-right: 24px;
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
    button {
      width: 169px;
      height: 34px;
      background: #1890ff;
      border-radius: 3px;
      font-weight: 900;
      font-size: 14px;
      line-height: 16px;
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
  hidden: css`
    display: none !important;
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

interface AppProps {
  isSignin: boolean
  setUserState: (state: boolean) => void
}

export const GlobalMenu: FC<AppProps> = ({ isSignin, setUserState }) => {
  const history = useHistory()
  function signOut() {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        firebase
          .auth()
          .signOut()
          .then(() => {
            alert('ログアウトしました')
            setUserState(false)
          })
      }
    })
  }
  return (
    <header css={head.base}>
      <ul id="nav" css={head.nav}>
        {/* ロゴ */}
        <li css={head.img}>
          <Link to="">
            <img src={ProstageLogo} alt="Prostage" />
          </Link>
        </li>
        {/* 法人プラン */}
        <li css={head.plan}>
          <Link to="/">法人プラン</Link>
        </li>
        {/* ログイン */}
        <li css={isSignin ? head.hidden : head.signin}>
          <Link to="/SignIn">ログイン</Link>
        </li>
        {/* 無料会員登録 */}
        <li css={isSignin ? head.hidden : head.btn}>
          <button onClick={() => history.push('/SignUp')}>無料会員登録</button>
        </li>
        <li css={isSignin ? head.signout : head.hidden}>
          {/* ログアウト */}
          <button onClick={signOut}>ログアウト</button>
        </li>
      </ul>
    </header>
  )
}
