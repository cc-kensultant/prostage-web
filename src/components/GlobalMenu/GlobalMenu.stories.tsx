import React, { FC } from 'react'

import { GlobalMenu } from './GlobalMenu'

export type AppProps = {
  isSignin: boolean
  setUserState: (state: boolean) => void
}

export default {
  title: 'GlobalMenu',
  component: GlobalMenu,
}

export const Default: FC<AppProps> = ({ isSignin, setUserState }) => (
  <GlobalMenu isSignin={isSignin} setUserState={setUserState} ><p>dataX</p></GlobalMenu>
)
