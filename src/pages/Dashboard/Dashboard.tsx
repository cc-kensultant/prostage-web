/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { FC, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { CoverImageContainer } from '../../containers/CoverImage'
import { UserIconContainer } from '../../containers/UserIcon'

export const Dashboard: FC = () => {
  const [userName, setUserName] = useState('')
  useEffect(() => {
    // TODO: ログイン情報から、このユーザーの名前を取得する
    setUserName('道明寺 瑚太朗')
  }, [])
  return (
    <main css={styles.main}>
      <CoverImageContainer />
      <div css={styles.userInfo.base}>
        <div css={styles.userInfo.icon}>
          <UserIconContainer />
        </div>
        {/* TODO: プロフィール編集画面へのリンクに差し替え */}
        <Link to="/" css={styles.userInfo.link}>
          プロフィールの編集
        </Link>
        <h1 css={styles.userInfo.name}>{userName}</h1>
      </div>
    </main>
  )
}

const styles = {
  main: css`
    width: 100vw;
  `,
  userInfo: {
    base: css`
      padding: 0 15vw;
    `,
    icon: css`
      margin-top: -80px;
    `,
    link: css`
      margin-left: auto;
      margin-top: -30px;
      width: 190px;
      height: 38px;
      border: 1px solid #1890ff;
      border-radius: 20px;
      display: block;
      text-align: center;
      text-decoration: unset;
      font-family: Mplus 1p;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 38px;
      color: #096dd9;
      &:hover,
      &:focus {
        outline: none;
        background: #f3f3f3;
      }
    `,
    name: css`
      font-family: Mplus 1p;
      font-weight: 500;
      font-size: 24px;
      line-height: 36px;
      color: #10202d;
    `,
  },
}
