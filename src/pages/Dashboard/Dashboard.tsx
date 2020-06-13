/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { FC } from 'react'
import { CoverImageContainer } from '../../containers/CoverImage'
import { UserIconContainer } from '../../containers/UserIcon'

export const Dashboard: FC = () => {
  return (
    <main css={styles.main}>
      <CoverImageContainer />
      <div css={styles.userIcon.base}>
        <div css={styles.userIcon.absolute}>
          <UserIconContainer />
        </div>
      </div>
    </main>
  )
}

const styles = {
  main: css`
    width: 100vw;
  `,
  userIcon: {
    base: css`
      position: relative;
    `,
    absolute: css`
      position: absolute;
      top: -80px;
      left: 15vw;
    `,
  },
}
