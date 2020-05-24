/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React, { FC, useState } from 'react'
import { firebase } from '../../utils/firebase'
import { Link, useHistory } from 'react-router-dom'
import GoogleLogo from '../../images/GoogleLogo.svg'
import FacebookLogo from '../../images/FacebookLogo.svg'
import TwitterLogo from '../../images/TwitterLogo.svg'
import { Context } from '../../types/contextType'

export const SignIn: FC = () => {
  const context = React.useContext(Context)
  const [state, setState] = useState({
    email: '',
    pass: '',
  })
  const history = useHistory()
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.value })
  }
  const validation = () => {
    return state.email && state.pass
  }
  const onSubmit = async () => {
    if (!validation()) return
    try {
      await firebase.auth().signInWithEmailAndPassword(state.email, state.pass)
      // TODO: IDトークンの取得/保持 firebase.auth().currentUser.getIdToken()
      // TODO:トースト通知など検討
      alert('ログインに成功しました。')
      context.setUserState(true)
      // TODO:ログイン後ページに移動
      history.push('/')
    } catch {
      // TODO:トースト通知など検討
      alert('ログインに失敗しました。')
    }
  }
  return (
    <main css={styles.base}>
      <article css={styles.contentBase}>
        <h1 css={styles.title}>ログイン</h1>
        <form css={styles.formBase}>
          <input
            type="text"
            name="email"
            value={state.email}
            onChange={handleChange}
            css={styles.email}
            placeholder="メールアドレス"
          />
          <input
            type="password"
            name="pass"
            value={state.pass}
            onChange={handleChange}
            css={styles.pass}
            placeholder="パスワード"
          />
          <button
            type="button"
            css={validation() ? styles.btn : css(styles.btn, styles.btnDisable)}
            tabIndex={validation() ? 0 : -1}
            onClick={onSubmit}
          >
            ログイン
          </button>
        </form>
        <p css={styles.forgotInfo}>
          パスワードをお忘れの場合は
          <Link css={styles.forgotLink} to="/">
            こちら
          </Link>
        </p>
        <div css={styles.hrBase}>
          <hr css={styles.hr} />
          <div css={styles.hrInfo}>または</div>
          <hr css={styles.hr} />
        </div>
        {/* google, facebook, twitter 外部リンク？なのでnavは付けない */}
        <ul css={styles.iconsBase}>
          <li css={styles.google}>
            <button type="button">
              <img src={GoogleLogo} alt="Google" css={styles.image} />
            </button>
          </li>
          <li css={styles.facebook}>
            <button type="button">
              <img src={FacebookLogo} alt="Facebook" css={styles.image} />
            </button>
          </li>
          <li css={styles.twitter}>
            <button type="button">
              <img src={TwitterLogo} alt="Twitter" css={styles.image} />
            </button>
          </li>
        </ul>
        <p css={styles.signupInfo}>
          アカウントをお持ちでないですか？
          <Link css={styles.signupLink} to="/sign-up">
            新規登録
          </Link>
        </p>
      </article>
    </main>
  )
}

const styles = {
  base: css`
    width: 100%;
    margin: 120px 0;
    display: flex;
    justify-content: center;
    opacity: 0;
    animation: view 0.5s forwards;
    @keyframes view {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  `,
  contentBase: css`
    width: 404px;
    padding: 18px;
    background: #ffffff;
  `,
  title: css`
    margin-top: -12px;
    padding: 0 16px;
    font-family: Mplus 1p;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 36px;
    color: #555555;
    cursor: default;
  `,
  formBase: css`
    padding: 0 16px;
    margin-top: 46px;
  `,
  email: css`
    padding: 14px;
    width: 100%;
    height: 50px;
    border: 1px solid #c4c4c4;
    box-sizing: border-box;
    border-radius: 5px;
    outline: none;
    font-family: Mplus 1p;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 22px;
    color: #555555;
    &:focus {
      border: 1px solid #1890FF;
      caret-color: #1890FF;
    },
  `,
  pass: css`
    margin-top: 15px;
    padding: 14px;
    width: 100%;
    height: 50px;
    border: 1px solid #c4c4c4;
    box-sizing: border-box;
    border-radius: 5px;
    outline: none;
    font-family: Mplus 1p;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 22px;
    color: #555555;
    &:focus {
      border: 1px solid #1890FF;
      caret-color: #1890FF;
    },
  `,
  btn: css`
    margin-top: 15px;
    width: 100%;
    height: 56px;
    background: #d9d9d9;
    font-family: Mplus 1p;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 36px;
    color: #3a3a3a;
    cursor: pointer;
    border: unset;
    transition: background 0.2s, opacity 0.2s;
    outline: none;
    opacity: 1;
    &:hover {
      background: #bfbfbf;
    }
    &:focus {
      background: #bfbfbf;
    }
  `,
  btnDisable: css`
    opacity: 0.4 !important;
    cursor: default !important;
    &:hover {
      background: #d9d9d9 !important;
    }
  `,
  forgotInfo: css`
    margin-top: 15px;
    padding: 0 16px;
    text-align: center;
    font-family: Mplus 1p;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 18px;
    color: #555555;
    cursor: default;
  `,
  forgotLink: css`
    margin-left: 4px;
    color: #2f80ed;
    cursor: pointer;
    outline: none;
    &:focus {
      background: #f3f3f3;
    }
  `,
  hrBase: css`
    margin-top: 42px;
    padding: 0 16px;
    display: flex;
    align-items: center;
  `,
  hr: css`
    flex-glow: 1 !important;
    width: 100%;
  `,
  hrInfo: css`
    margin: 0 28px;
    min-width: 36px;
    font-family: Mplus 1p;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 18px;
    color: #555555;
    cursor: default;
  `,
  iconsBase: css`
    margin-top: 30px;
    padding: 0 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
  google: css`
    background: #f5f5f5;
    border: 1px solid #1f212b;
    border-radius: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    button {
      width: 94px;
      height: 45px;
      cursor: pointer;
      border: none;
      background: none;
      padding: unset;
      outline: none;
      transition: background 0.2s;
      &:hover {
        background: #d9d9d9;
      }
      &:focus {
        background: #d9d9d9;
      }
    }
  `,
  facebook: css`
    background: #f5f5f5;
    border: 1px solid #317bff;
    border-radius: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    button {
      width: 94px;
      height: 45px;
      cursor: pointer;
      border: none;
      background: none;
      padding: unset;
      outline: none;
      transition: background 0.2s;
      &:hover {
        background: #d9d9d9;
      }
      &:focus {
        background: #d9d9d9;
      }
    }
  `,
  twitter: css`
    background: #f5f5f5;
    border: 1px solid #00a9f4;
    border-radius: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    button {
      width: 94px;
      height: 45px;
      cursor: pointer;
      border: none;
      background: none;
      padding: unset;
      outline: none;
      transition: background 0.2s;
      &:hover {
        background: #d9d9d9;
      }
      &:focus {
        background: #d9d9d9;
      }
    }
  `,
  image: css`
    width: 40px;
    height: 40px;
  `,
  signupInfo: css`
    margin-top: 36px;
    padding: 0 16px;
    text-align: center;
    font-family: Mplus 1p;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 18px;
    color: #555555;
    cursor: default;
  `,
  signupLink: css`
    margin-left: 4px;
    color: #2f80ed;
    cursor: pointer;
    outline: none;
    &:focus {
      background: #f3f3f3;
    }
  `,
}
