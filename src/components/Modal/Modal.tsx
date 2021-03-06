/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { FC, Fragment } from 'react'
import ReactDOM from 'react-dom'

export type props = {
  onClose: () => void
}

export const Modal: FC<props> = ({ onClose, children }) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <div css={styles.background} onClick={onClose}>
          <div
            css={styles.contents}
            onClick={(e) => {
              e.stopPropagation()
            }}
          >
            {children}
          </div>
        </div>,
        document.getElementById('modal')!,
      )}
    </Fragment>
  )
}

const styles = {
  background: css`
    position: fixed;
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 2;
  `,
  contents: css`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
  `,
}
