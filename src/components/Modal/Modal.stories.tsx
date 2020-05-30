import React from 'react'

import { Modal } from './Modal'

export default {
  title: 'Modal',
  component: Modal,
}

export const Default = () => (
  <Modal onClose={() => {}}>
    <p>dataX</p>
  </Modal>
)
