import React from 'react'

import Icon from '../../images/iconImage/introduction.jsx'

import { iconColorSchema } from '../../utils/iconColorSchema'

import { SkilCardExplanation } from './SkilCardExplanation'

import { SkilCard } from './SkilCard'

export default {
  title: 'SkilCard',
  component: SkilCard,
}

export const スキルカード = () => (
  <SkilCard
    icon={Icon}
    curriculum={SkilCardExplanation[0].title}
    explanation={SkilCardExplanation[0].explanation}
    maincolor={iconColorSchema[0].color}
    subcolor={iconColorSchema[1].color}
  />
)
