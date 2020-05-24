import React from 'react'

export type contextType = {
  isSignin: boolean
  setUserState: (state: boolean) => void
}

export const Context = React.createContext<contextType>({
  isSignin: false,
  setUserState: () => {},
})

export type contextTypeModal = {
  modal: String
  setModalState: (name: string) => void
}

export const ContextModal = React.createContext<contextTypeModal>({
  modal: '',
  setModalState: () => {},
})
