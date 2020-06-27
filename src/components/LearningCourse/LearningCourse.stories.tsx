import React from 'react'

import Icon1 from '../../images/skills/01_marketing.svg'

import { action } from '@storybook/addon-actions'

import { LearningCourse } from './LearningCourse'

export default {
  title: 'LearningCourse',
  component: LearningCourse,
}

export const マーケティングスキル = () => (
  <LearningCourse
    src={Icon1}
    title={'マーケティングスキル'}
    mainColor={'#FF4D4F'}
    subColor={'#FFF1F0'}
    percent={5}
    onContinueBtn={action('on-continue')}
    onDetailsLink={action('on-ditails')}
  />
)
