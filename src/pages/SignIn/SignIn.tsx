/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { FC } from 'react'
import { useState } from 'react'
import firebase from '../../utils/firebase'
import { Link, useHistory } from 'react-router-dom'
import Cancel from '../../images/Cancel.svg'
import GoogleLogo from '../../images/GoogleLogo.svg'
import FacebookLogo from '../../images/FacebookLogo.svg'
import TwitterLogo from '../../images/TwitterLogo.svg'

interface AppProps {
  setUserState: (state: boolean) => void
}

/** script */
export const SignIn: FC<AppProps> = ({ setUserState }) => {
  const [state, setState] = useState({
    email: '',
    pass: '',
  })
  const history = useHistory()
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.value })
  }
  function validation() {
    return state.email && state.pass
  }
  const onSubmit = () => {
    if (!validation()) return
    firebase
      .auth()
      .signInWithEmailAndPassword(state.email, state.pass)
      .then(() => {
        // 正常終了時
        // TODO:トースト通知など検討
        alert('ログインに成功しました。')
        setUserState(true)
        // Topに移動(仮)
        history.push('/')
      })
      .catch(() => {
        // 異常終了時
        // TODO:トースト通知など検討
        alert('ログインに失敗しました。')
      })
  }
  return (
    <main css={styles.base}>
      {/* TODO:↓ダイアログコンポーネント化？ */}
      <article css={card.base}>
        {/* ×ボタン */}
        <button css={card.cancelBase}>
          <img src={Cancel} alt="キャンセル" />
        </button>
        {/* 見出し */}
        <h1 css={card.title}>ログイン</h1>
        {/* フォーム */}
        <form css={card.formBase}>
          <input
            type="text"
            name="email"
            value={state.email}
            onChange={handleChange}
            css={card.email}
            placeholder="メールアドレス"
          />
          <input
            type="password"
            name="pass"
            value={state.pass}
            onChange={handleChange}
            css={card.pass}
            placeholder="パスワード"
          />
          <button
            type="button"
            css={validation() ? card.btn : css(card.btn, card.btnDisable)}
            tabIndex={validation() ? 0 : -1}
            onClick={onSubmit}
          >
            ログイン
          </button>
        </form>
        {/* パスワード忘れ */}
        <p css={card.forgotInfo}>
          パスワードをお忘れの場合は
          <Link css={card.forgotLink} to="/">
            こちら
          </Link>
        </p>
        {/* または */}
        <div css={card.hrBase}>
          <hr css={card.hr} />
          <div css={card.hrInfo}>または</div>
          <hr css={card.hr} />
        </div>
        {/* google, facebook, twitter 外部リンク？なのでnavは付けない */}
        <ul css={card.iconsBase}>
          <li css={card.google}>
            <button>
              <img src={GoogleLogo} alt="Google" css={card.image} />
            </button>
          </li>
          <li css={card.facebook}>
            <button>
              <img src={FacebookLogo} alt="Facebook" css={card.image} />
            </button>
          </li>
          <li css={card.twitter}>
            <button>
              <img src={TwitterLogo} alt="Twitter" css={card.image} />
            </button>
          </li>
        </ul>
        {/* ログイン案内 */}
        <p css={card.signupInfo}>
          アカウントをお持ちでないですか？
          <Link css={card.signupLink} to="/sign-up">
            新規登録
          </Link>
        </p>
      </article>
    </main>
  )
}

/** css */
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
        transform: scale(0.95);
        opacity: 0;
      }
      to {
        transform: scale(1);
        opacity: 1;
      }
    }
  `,
}
// TODO:↓ダイアログコンポーネント化の際にstylesに名称変更
const card = {
  // ベース
  base: css`
    width: 404px;
    padding: 18px;
    background: #ffffff;
    border-radius: 10px;
    box-shadow: 0px 0px 6px rgb(0, 0, 0, 0.1);
  `,
  // 登録フォーム
  cancelBase: css`
    display: block;
    margin-left: auto;
    padding: unset;
    border: none;
    background: none;
    img {
      width: 20px;
      height: 20px;
      cursor: pointer;
      transition: opacity 0.2s;
      &:hover {
        opacity: 0.5;
      }
    }
    &:focus {
      outline: none;
      img {
        opacity: 0.5;
      }
    }
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
    border: 1px solid #3a3a3a;
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
    border: unset !important;
    opacity: 0.4 !important;
    cursor: default !important;
    &:hover {
      background: #D9D9D9 !important;
    }
  `,
  // パスワード忘れ
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
  // ソーシャルアカウント認証
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
  // 新規登録案内
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
