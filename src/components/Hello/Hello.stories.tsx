import React from 'react'

/* eslint-disable */
import { action } from '@storybook/addon-actions'
/* eslint-disable */

import { Hello } from './Hello'

export default {
  title: 'Hello',
  component: Hello,
}

export const Default = () => (
  <Hello name="Hoge">
    <p>dataX</p>
  </Hello>
)
