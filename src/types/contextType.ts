export type user = {
  isSignin: boolean
  setUserState: (state: boolean) => void
}

export type modal = {
  modal: String
  setModalState: (name: string) => void
}
