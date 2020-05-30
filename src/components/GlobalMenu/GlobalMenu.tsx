/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import React, { FC, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { firebase } from '../../utils/firebase'
import ProstageLogo from '../../images/ProstageLogo.svg'
import Notice from '../../images/notifications_none_24px.svg'
import Email from '../../images/mail_outline_24px.svg'
import { UserContext } from '../../contexts/user'
import { SignIn } from '../SignIn'
import { SignUp } from '../SignUp'

export const GlobalMenu: FC = () => {
  const { isSignin, setUserState } = React.useContext(UserContext)
  const signOut = () => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        try {
          await firebase.auth().signOut()
          alert('ログアウトしました')
          setUserState(false)
        } catch {
          alert('ログアウトに失敗しました')
        }
      }
    })
  }
  return (
    <header css={styles.base}>
      <ul id="nav" css={styles.nav.base}>
        <li css={(styles.nav.list, styles.logo.base)}>
          <Link to="" css={styles.logo.link}>
            <img src={ProstageLogo} alt="Prostage" css={styles.logo.img} />
          </Link>
        </li>
        {isSignin && (
          <Fragment>
            <li css={(styles.nav.list, styles.mypage.base)}>
              <Link to="/" css={styles.mypage.link}>
                マイページ
              </Link>
            </li>
            {/* TODO:CSS調整 */}
            <li css={(styles.nav.list, styles.mypage.base)}>
              <Link to="/" css={styles.mypage.link}>
                スキル一覧
              </Link>
            </li>
            {/* TODO:CSS調整 */}
            <li css={(styles.nav.list, styles.mypage.base)}>
              <Link to="/" css={styles.mypage.link}>
                スライド検索
              </Link>
            </li>
            {/* TODO:CSS調整 */}
            <li css={(styles.nav.list, styles.mypage.base)}>
              <Link to="/" css={styles.mypage.link}>
                コミュニティ
              </Link>
            </li>
            <li css={(styles.nav.list, styles.userMenu.base)}>
              <Link to="/" css={styles.userMenu.link}>
                メニュー(未)
              </Link>
            </li>
            <li css={(styles.nav.list, styles.signout.base)}>
              <button type="button" onClick={signOut} css={styles.signout.button}>
                ログアウト
              </button>
            </li>
            <li css={(styles.nav.list, styles.notice.base)}>
              <Link to="/" css={styles.notice.link}>
                <label css={styles.notice.label}>2</label>
                <img src={Notice} alt="notice" css={styles.notice.img} />
              </Link>
            </li>
            <li css={(styles.nav.list, styles.email.base)}>
              <Link to="/" css={styles.email.link}>
                <label css={styles.email.label}>2</label>
                <img src={Email} alt="email" css={styles.email.img} />
              </Link>
            </li>
          </Fragment>
        )}
        {!isSignin && (
          <Fragment>
            <li css={(styles.nav.list, styles.plan.base)}>
              <Link to="/" css={styles.plan.link}>
                法人プラン
              </Link>
            </li>
            <li css={styles.nav.list}>
              <SignIn />
            </li>
            <li css={styles.nav.list}>
              <SignUp />
            </li>
          </Fragment>
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
  logo: {
    base: css`
      margin-left: 8px;
      cursor: pointer;
    `,
    link: css`
      display: block;
      height: 34px;
      &:focus {
        outline: none;
        background: #f3f3f3;
      }
    `,
    img: css`
      max-width: 60px;
      height: 34px;
    `,
  },
  mypage: {
    base: css`
      margin-left: 32px;
      height: 34px;
      cursor: pointer;
      text-align: center;
    `,
    link: css`
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
    `,
  },
  userMenu: {
    base: css`
      margin-left: auto;
      width: 104px;
      height: 34px;
      text-align: center;
      margin-right: 24px;
      height: 34px;
    `,
    link: css`
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
    `,
  },
  signout: {
    base: css`
      width: 82px;
      height: 34px;
      text-align: center;
      margin-right: 24px;
    `,
    button: css`
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
    `,
  },
  notice: {
    base: css`
      margin-left: 8px;
      cursor: pointer;
    `,
    link: css`
      display: block;
      height: 34px;
      position: relative;
      border-radius: 17px;
      &:focus {
        outline: none;
        background: #f3f3f3;
      }
    `,
    label: css`
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
    `,
    img: css`
      padding: 5px;
      width: 24px;
      height: 24px;
      opacity: 0.54;
    `,
  },
  email: {
    base: css`
      margin-left: 8px;
      cursor: pointer;
    `,
    link: css`
      display: block;
      height: 34px;
      position: relative;
      border-radius: 17px;
      &:focus {
        outline: none;
        background: #f3f3f3;
      }
    `,
    label: css`
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
    `,
    img: css`
      padding: 5px;
      width: 24px;
      height: 24px;
      opacity: 0.54;
    `,
  },
  plan: {
    base: css`
      margin-right: 44px;
      margin-left: auto;
      width: 82px;
      height: 34px;
      cursor: pointer;
      text-align: center;
    `,
    link: css`
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
    `,
  },
}
