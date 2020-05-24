/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React, { FC, useState } from 'react'
import { firebase } from '../../utils/firebase'
import { Link, useHistory } from 'react-router-dom'
import Cancel from '../../images/Cancel.svg'
import GoogleLogo from '../../images/GoogleLogo.svg'
import FacebookLogo from '../../images/FacebookLogo.svg'
import TwitterLogo from '../../images/TwitterLogo.svg'
import { Context } from '../../types/contextType'
import { Modal } from '../Modal'

export const SignUp: FC = () => {
  const context = React.useContext(Context)
  const [state, setState] = useState({
    email: '',
    pass: '',
    passConf: '',
  })
  const [isModal, setIsModal] = useState(false)
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
      context.setUserState(true)
      // TODO:新規登録後ページに移動
      history.push('/')
    } catch {
      // TODO:トースト通知など検討
      alert('アカウント登録に失敗しました。')
    }
  }
  return (
    <li>
      <button type="button" css={styles.signupBtn} onClick={() => setIsModal(true)}>
        無料会員登録
      </button>
      {isModal && (
        <Modal close={() => setIsModal(false)}>
          <article css={styles.base}>
            <button type="button" css={styles.cancelBase} onClick={() => setIsModal(false)}>
              <img src={Cancel} alt="キャンセル" />
            </button>
            <h1 css={styles.title}>アカウントを作成</h1>
            <p css={styles.info}>
              アカウントを作成することにより、利用規規約及び
              <br />
              プライバシーポリシーに同意するものとします。
            </p>
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
              <input
                type="password"
                name="passConf"
                value={state.passConf}
                onChange={handleChange}
                css={styles.passConf}
                placeholder="確認用パスワード"
              />
              <button
                type="button"
                css={validation() ? styles.btn : css(styles.btn, styles.btnDisable)}
                tabIndex={validation() ? 0 : -1}
                onClick={onSubmit}
              >
                新規登録
              </button>
            </form>
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
            <p css={styles.signinInfo}>
              すでにアカウントをお持ちですか？
              <Link css={styles.signinLink} to="/sign-in">
                ログイン
              </Link>
            </p>
          </article>
        </Modal>
      )}
    </li>
  )
}

const styles = {
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
  base: css`
    width: 404px;
    padding: 18px;
    background: #ffffff;
    border-radius: 10px;
    box-shadow: 0px 0px 6px rgb(0, 0, 0, 0.1);
  `,
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
  formBase: css`
    padding: 0 16px;
    margin-top: 36px;
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
      background: #D9D9D9 !important;
    },
  `,
  hrBase: css`
    margin-top: 34px;
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
  signinInfo: css`
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
  signinLink: css`
    margin-left: 4px;
    color: #2f80ed;
    cursor: pointer;
    outline: none;
    &:focus {
      background: #f3f3f3;
    }
  `,
}
