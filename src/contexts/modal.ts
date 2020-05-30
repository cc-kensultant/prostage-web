import React from 'react'
import { modal } from '../types/contextType'

export const ModalContext = React.createContext<modal>({
  modal: '',
  setModalState: () => {},
})
