/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { FC } from 'react'
import { Link, useHistory } from 'react-router-dom'

const head = {
  base: css`
    position: sticky;
    top: 0;
    background: #fff;
    height: 34px;
    padding: 13px 24px;
    display: flex;
    align-items: center;
    box-shadow: 2px 0px 8px rgba(0, 0, 0, 0.12);
    z-index: 1;
  `,
  img: css`
    margin-left: 8px;
    width: 60px;
    height: 20px;
    cursor: pointer;
  `,
  space: css`
    flex-grow: 1 !important;
  `,
  plan: css`
    width: 82px;
    height: 20px;
    font-weight: 900;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.1em;
    color: #555555;
    text-decoration: unset;
    text-align: center;
    cursor: pointer;
    margin-right: 44px;
  `,
  signin: css`
    width: 82px;
    height: 20px;
    font-weight: 900;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: 0.1em;
    color: #555555;
    text-decoration: unset;
    text-align: center;
    cursor: pointer;
    margin-right: 24px;
  `,
  btn: css`
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
    transition: background .2s;
    outline: none;
    &:hover {
      background: #096DD9;
    },
  `,
}

export const GlobalMenu: FC<{}> = () => {
  const history = useHistory()
  return (
    <div css={head.base}>
      {/* ロゴ */}
      <img
        src={`${process.env.PUBLIC_URL}/ProstageLogo.svg`}
        alt="Prostage"
        css={head.img}
        onClick={() => history.push('/')}
      />
      {/* スペーサー */}
      <div css={head.space} />
      {/* 法人プラン */}
      <div css={head.plan}>法人プラン</div>
      {/* ログイン */}
      <Link to="/SignIn" css={head.signin}>
        ログイン
      </Link>
      {/* 無料会員登録 */}
      <button css={head.btn} onClick={() => history.push('/SignUp')}>
        無料会員登録
      </button>
    </div>
  )
}
