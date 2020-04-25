import React from 'react'

/* eslint-disable */
import { action } from '@storybook/addon-actions'
/* eslint-disable */

import { GlobalMenu } from './GlobalMenu'

export default {
  title: 'GlobalMenu',
  component: GlobalMenu,
}

export const Default = () => (
  <GlobalMenu><p>dataX</p></GlobalMenu>
)