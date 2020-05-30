export type user = {
  isSignin: boolean
  setUserState: (state: boolean) => void
}

export type modal = {
  modalMode: string
  setModalState: (name: string) => void
}
