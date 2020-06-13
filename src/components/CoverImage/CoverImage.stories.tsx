import React from 'react'

/* eslint-disable */
import { action } from '@storybook/addon-actions'
/* eslint-disable */

import { CoverImage } from './CoverImage'

export default {
  title: 'CoverImage',
  component: CoverImage,
}

export const Default = () => (
  <CoverImage imageSrc="hogehoge">
    <p>dataX</p>
  </CoverImage>
)
