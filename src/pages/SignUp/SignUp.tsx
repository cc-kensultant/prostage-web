/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React, { FC, useState } from 'react'
import { firebase } from '../../utils/firebase'
import { Link, useHistory } from 'react-router-dom'
import GoogleLogo from '../../images/GoogleLogo.svg'
import FacebookLogo from '../../images/FacebookLogo.svg'
import TwitterLogo from '../../images/TwitterLogo.svg'
import { UserContext } from '../../contexts/user'

export type AppProps = {
  setUserState: (state: boolean) => void
}

export const SignUp: FC = () => {
  const { setUserState } = React.useContext(UserContext)
  const [state, setState] = useState({
    email: '',
    pass: '',
    passConf: '',
  })
  const history = useHistory()
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.value })
  }
  const validation = () => {
    return state.email && state.pass && state.passConf
  }
  const onSubmit = async () => {
    if (!validation()) return
    try {
      await firebase.auth().createUserWithEmailAndPassword(state.email, state.pass)
      // TODO:トースト通知など検討
      alert('アカウント登録に成功しました。')
      setUserState(true)
      // TODO:新規登録後ページに移動
      history.push('/')
    } catch {
      // TODO:トースト通知など検討
      alert('アカウント登録に失敗しました。')
    }
  }
  return (
    <main css={styles.base}>
      <article css={styles.article}>
        <h1 css={styles.title}>アカウントを作成</h1>
        <p css={styles.info}>
          アカウントを作成することにより、利用規規約及び
          <br />
          プライバシーポリシーに同意するものとします。
        </p>
        <form css={styles.form.base}>
          <input
            type="text"
            name="email"
            value={state.email}
            onChange={handleChange}
            css={styles.form.email}
            placeholder="メールアドレス"
          />
          <input
            type="password"
            name="pass"
            value={state.pass}
            onChange={handleChange}
            css={styles.form.pass}
            placeholder="パスワード"
          />
          <input
            type="password"
            name="passConf"
            value={state.passConf}
            onChange={handleChange}
            css={styles.form.passConf}
            placeholder="確認用パスワード"
          />
          <button
            type="button"
            css={validation() ? styles.form.btn : css(styles.form.btn, styles.form.btnDisable)}
            tabIndex={validation() ? 0 : -1}
            onClick={onSubmit}
          >
            新規登録
          </button>
        </form>
        <div css={styles.hr.base}>
          <hr css={styles.hr.content} />
          <div css={styles.hr.text}>または</div>
          <hr css={styles.hr.content} />
        </div>
        {/* google, facebook, twitter 外部リンク？なのでnavは付けない */}
        <ul css={styles.icons.base}>
          <li css={styles.icons.google}>
            <button type="button" css={styles.icons.button}>
              <img src={GoogleLogo} alt="Google" css={styles.icons.img} />
            </button>
          </li>
          <li css={styles.icons.facebook}>
            <button type="button" css={styles.icons.button}>
              <img src={FacebookLogo} alt="Facebook" css={styles.icons.img} />
            </button>
          </li>
          <li css={styles.icons.twitter}>
            <button type="button" css={styles.icons.button}>
              <img src={TwitterLogo} alt="Twitter" css={styles.icons.img} />
            </button>
          </li>
        </ul>
        <p css={styles.signin.text}>
          すでにアカウントをお持ちですか？
          <Link css={styles.signin.link} to="/sign-in">
            ログイン
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
  article: css`
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
  info: css`
    padding: 0 16px;
    margin-top: 12px;
    font-family: Mplus 1p;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 18px;
    color: #555555;
    cursor: default;
  `,
  form: {
    base: css`
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
    passConf: css`
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
      &:hover,
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
  },
  forgot: {
    text: css`
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
    link: css`
      margin-left: 4px;
      color: #2f80ed;
      cursor: pointer;
      outline: none;
      &:focus {
        background: #f3f3f3;
      }
    `,
  },
  hr: {
    base: css`
      margin-top: 42px;
      padding: 0 16px;
      display: flex;
      align-items: center;
    `,
    content: css`
      flex-glow: 1 !important;
      width: 100%;
    `,
    text: css`
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
  },
  icons: {
    base: css`
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
    `,
    facebook: css`
      background: #f5f5f5;
      border: 1px solid #317bff;
      border-radius: 2px;
      display: flex;
      justify-content: center;
      align-items: center;
    `,
    twitter: css`
      background: #f5f5f5;
      border: 1px solid #00a9f4;
      border-radius: 2px;
      display: flex;
      justify-content: center;
      align-items: center;
    `,
    button: css`
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
    `,
    img: css`
      width: 40px;
      height: 40px;
    `,
  },
  signin: {
    text: css`
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
    link: css`
      margin-left: 4px;
      padding: unset;
      color: #2f80ed;
      cursor: pointer;
      outline: none;
      border: unset;
      background: #ffffff;
      text-decoration: underline;
      &:focus {
        background: #f3f3f3;
      }
    `,
  },
}
