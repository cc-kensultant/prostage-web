import React from 'react'

import { Modal } from './Modal'

export default {
  title: 'Modal',
  component: Modal,
}

export const Default = () => (
  <Modal close={() => {}}>
    <p>dataX</p>
  </Modal>
)
