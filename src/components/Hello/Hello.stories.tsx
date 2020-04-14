import React from 'react'
// eslint-disable-next-line no-unused-vars
import { action } from '@storybook/addon-actions'
import { Hello } from './Hello'

export default {
  title: 'Hello',
  component: Hello,
}

export const Default = () => (
  <Hello>
    <p>dataX</p>
  </Hello>
)
