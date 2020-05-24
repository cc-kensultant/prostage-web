/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { FC } from 'react'

export type props = {
  close: () => void
}

export const Modal: FC<props> = ({ close, children }) => (
  <div css={styles.background} onClick={close}>
    <div
      css={styles.contents}
      onClick={(e) => {
        e.stopPropagation()
      }}
    >
      {children}
    </div>
  </div>
)

const styles = {
  background: css`
    position: fixed;
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  `,
  contents: css`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
  `,
}
