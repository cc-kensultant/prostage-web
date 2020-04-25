/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { FC } from 'react'
/* eslint-disable */
import useSWR from 'swr'
import { fetcher } from '../../utils/fetcher'
/* eslint-disable */
import { useState } from 'react'
import firebase from '../../utils/firebase'
import { useHistory } from 'react-router-dom'

interface AppProps {
  setUserState: (state: boolean) => void
}

/** css */
const signin = {
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
// TODO:↓ダイアログコンポーネント化？
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
    display: flex;
    justify-content: flex-end;
  `,
  cancelImage: css`
    width: 20px;
    height: 20px;
    cursor: pointer;
    transition: opacity .2s;
    &:hover {
      opacity: 0.5;
    },
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
    background: #D9D9D9;
    font-family: Mplus 1p;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 36px;
    color: #3A3A3A;
    cursor: pointer;
    border: 1px solid #3A3A3A;
    transition: background .2s, opacity .2s;
    outline: none;
    opacity: 1;
    &:hover {
      background: #BFBFBF;
    },
  `,
  btnDisable: css`
    border: unset !important;
    opacity: 0.4 !important;
    cursor: default !important;
    &:hover {
      background: #D9D9D9 !important;
    },
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
  forgotSpan: css`
    margin-left: 4px;
    color: #2f80ed;
    cursor: pointer;
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
    width: 94px;
    height: 45px;
    background: #f5f5f5;
    border: 1px solid #1f212b;
    border-radius: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: background .2s;
    &:hover {
      background: #D9D9D9;
    },
  `,
  facebook: css`
    width: 94px;
    height: 45px;
    background: #f5f5f5;
    border: 1px solid #317bff;
    border-radius: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: background .2s;
    &:hover {
      background: #D9D9D9;
    },
  `,
  twitter: css`
    width: 94px;
    height: 45px;
    background: #f5f5f5;
    border: 1px solid #00a9f4;
    border-radius: 2px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: background .2s;
    &:hover {
      background: #D9D9D9;
    },
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
  signupSpan: css`
    margin-left: 4px;
    color: #2f80ed;
    cursor: pointer;
  `,
}

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
    <div css={signin.base}>
      {/* TODO:↓ダイアログコンポーネント化？ */}
      <div css={card.base}>
        <div css={card.cancelBase}>
          <img
            src={`${process.env.PUBLIC_URL}/Cancel.svg`}
            alt="キャンセル"
            css={card.cancelImage}
          />
        </div>
        <div css={card.title}>ログイン</div>
        <form css={card.formBase}>
          <input
            type="text"
            name="email"
            value={state.email}
            onChange={handleChange}
            css={card.email}
            placeholder="メールアドレス"
          />
          <div>
            <input
              type="password"
              name="pass"
              value={state.pass}
              onChange={handleChange}
              css={card.pass}
              placeholder="パスワード"
            />
          </div>
          <div>
            <button
              type="button"
              css={validation() ? card.btn : css(card.btn, card.btnDisable)}
              onClick={onSubmit}
            >
              ログイン
            </button>
          </div>
        </form>
        {/* パスワード忘れ */}
        <div css={card.forgotInfo}>
          パスワードをお忘れの場合は
          <span css={card.forgotSpan}>こちら</span>
        </div>
        {/* または */}
        <div css={card.hrBase}>
          <hr css={card.hr} />
          <div css={card.hrInfo}>または</div>
          <hr css={card.hr} />
        </div>
        {/* google, facebook, twitter */}
        <div css={card.iconsBase}>
          <div css={card.google}>
            <img src={`${process.env.PUBLIC_URL}/GoogleLogo.svg`} alt="Google" css={card.image} />
          </div>
          <div css={card.facebook}>
            <img
              src={`${process.env.PUBLIC_URL}/FacebookLogo.svg`}
              alt="Facebook"
              css={card.image}
            />
          </div>
          <div css={card.twitter}>
            <img src={`${process.env.PUBLIC_URL}/TwitterLogo.svg`} alt="Twitter" css={card.image} />
          </div>
        </div>
        {/* ログイン案内 */}
        <div css={card.signupInfo}>
          アカウントをお持ちでないですか？
          <span css={card.signupSpan} onClick={() => history.push('/SignUp')}>
            新規登録
          </span>
        </div>
      </div>
    </div>
  )
}
