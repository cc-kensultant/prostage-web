/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { FC, useState, Fragment } from 'react'
import { action } from '@storybook/addon-actions'
import { BrowserRouter as Router } from 'react-router-dom'

import { Modal } from './Modal'

export default {
  title: 'Modal',
  component: Modal,
}

export const ModalOpen: FC = () => {
  // 初期値trueだと<div id="modal">が見つからなくてエラーになる
  const [isOpen, setModal] = useState(false)
  return (
    <Fragment>
      <div id="modal"></div>
      <Router>
        <button
          type="button"
          onClick={() => {
            setModal(true)
          }}
        >
          modal open
        </button>
        {isOpen && (
          <Modal onClose={action('button-click')}>
            <p css={styles.article}>汎用モーダル</p>
          </Modal>
        )}
      </Router>
    </Fragment>
  )
}

const styles = {
  article: css`
    width: 404px;
    padding: 18px;
    background: #ffffff;
    border-radius: 10px;
    box-shadow: 0px 0px 6px rgb(0, 0, 0, 0.1);
  `,
}
