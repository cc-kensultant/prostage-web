/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { FC } from 'react'
import { CoverImageContainer } from '../../containers/CoverImage'

export const Dashboard: FC = () => {
  return (
    <main css={style.main}>
      <CoverImageContainer />
    </main>
  )
}

const style = {
  main: css`
    width: 100vw;
  `,
}
