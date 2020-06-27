/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { FC, useState, useEffect, Fragment } from 'react'
import { Link } from 'react-router-dom'
import { CoverImageContainer } from '../../containers/CoverImage'
import { UserIconContainer } from '../../containers/UserIcon'
import { LearningProgressContainer } from '../../containers/LearningProgress'
import { ContinuedItemContainer } from '../../containers/ContinuedItem'
import BookIcon from '../../images/library_books-24px.svg'

export const Dashboard: FC = () => {
  const [userName, setUserName] = useState('')
  const [tabNum, setTabNum] = useState(0)
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
      <div css={styles.tabs.base}>
        <button
          type="button"
          css={tabNum === 0 ? styles.tabs.item_enable : styles.tabs.item_disable}
          onClick={() => setTabNum(0)}
        >
          カリキュラム
        </button>
      </div>
      <hr css={styles.hr} />
      <div css={styles.content.base}>
        {tabNum === 0 && (
          <Fragment>
            <h2 css={styles.achievement.title}>達成度</h2>
            <ul css={styles.achievement.table.base}>
              <li css={styles.achievement.table.items}>
                <LearningProgressContainer menuIndex={0} />
              </li>
              <li css={styles.achievement.table.items}>
                <LearningProgressContainer menuIndex={1} />
              </li>
              <li css={styles.achievement.table.items}>
                <LearningProgressContainer menuIndex={2} />
              </li>
              <li css={styles.achievement.table.items}>
                <LearningProgressContainer menuIndex={3} />
              </li>
              <li css={styles.achievement.table.items}>
                <LearningProgressContainer menuIndex={4} />
              </li>
              <li css={styles.achievement.table.items}>
                <LearningProgressContainer menuIndex={5} />
              </li>
              <li css={styles.achievement.table.items}>
                <LearningProgressContainer menuIndex={6} />
              </li>
              <li css={styles.achievement.table.items}>
                <LearningProgressContainer menuIndex={7} />
              </li>
              <li css={styles.achievement.table.items}>
                <LearningProgressContainer menuIndex={8} />
              </li>
            </ul>
            <h2 css={styles.continued.title}>前回の続き</h2>
            <ContinuedItemContainer />
            <h2 css={styles.learning.title}>学習中のコース</h2>
          </Fragment>
        )}
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
      padding: 0 10vw;
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
  tabs: {
    base: css`
      margin-top: 28px;
      padding: 0 10vw;
    `,
    item_enable: css`
      width: 138px;
      height: 32px;
      cursor: pointer;
      padding: 0 0 0 24px;
      font-family: Mplus 1p;
      font-weight: normal;
      font-size: 18px;
      line-height: 27px;
      color: #555555;
      border: unset;
      border-bottom: 4px solid #1890ff;
      background: url("${BookIcon}") no-repeat;
      outline: none;
    `,
    item_disable: css`
      width: 138px;
      height: 32px;
      cursor: pointer;
      padding: 0 0 0 24px;
      font-family: Mplus 1p;
      font-weight: normal;
      font-size: 18px;
      line-height: 27px;
      color: #555555;
      border: unset;
      background: url("${BookIcon}") no-repeat;
      outline: none;
    `,
  },
  hr: css`
    margin-top: unset;
  `,
  content: {
    base: css`
      padding: 0 10vw;
    `,
  },
  achievement: {
    title: css`
      padding-top: 24px;
      font-family: Mplus 1p;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 27px;
      color: #10202d;
    `,
    table: {
      base: css`
        margin-top: 20px;
        width: 100%;
        display: -webkit-flex;
        display: flex;
        list-style-type: none;
        padding: unset;
        justify-content: space-between;
      `,
      items: css`
        display: block;
        text-align: center;
        text-decoration: none;
      `,
    },
  },
  continued: {
    title: css`
      margin-top: 62px;
      font-family: Mplus 1p;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 27px;
      color: #10202d;
    `,
  },
  learning: {
    title: css`
      margin-top: 62px;
      font-family: Mplus 1p;
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 27px;
      color: #10202d;
    `,
  },
}
