import React from 'react'

import Icon1 from '../../images/skills/01_marketing.svg'

import { action } from '@storybook/addon-actions'

import { ContinuedItem } from './ContinuedItem'

export default {
  title: 'ContinuedItem',
  component: ContinuedItem,
}

export const マーケティングスキル = () => (
  <ContinuedItem
    src={Icon1}
    title={'マーケティングスキル'}
    subTitle={'3.Googleの評価方法'}
    mainColor={'#FF4D4F'}
    subColor={'#FFF1F0'}
    percent={5}
    onContinueBtn={action('on-continue')}
    onDetailsLink={action('on-ditails')}
  />
)
