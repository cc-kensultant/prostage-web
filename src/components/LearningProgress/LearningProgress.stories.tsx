import React from 'react'

import { LearningProgress } from './LearningProgress'

import Icon0 from '../../images/skills/00_introduction.svg'
import Icon1 from '../../images/skills/01_marketing.svg'
import Icon2 from '../../images/skills/02_web_production.svg'
import Icon3 from '../../images/skills/03_web_knowledge.svg'
import Icon4 from '../../images/skills/04_pc_skill.svg'
import Icon5 from '../../images/skills/05_tool_skill.svg'
import Icon6 from '../../images/skills/06_auto_skill.svg'
import Icon7 from '../../images/skills/07_logical.svg'
import Icon8 from '../../images/skills/08_Regulation.svg'
import Icon0g from '../../images/skills/00_introduction_gray.svg'
import Icon1g from '../../images/skills/01_marketing_gray.svg'
import Icon2g from '../../images/skills/02_web_production_gray.svg'
import Icon3g from '../../images/skills/03_web_knowledge_gray.svg'
import Icon4g from '../../images/skills/04_pc_skill_gray.svg'
import Icon5g from '../../images/skills/05_tool_skill_gray.svg'
import Icon6g from '../../images/skills/06_auto_skill_gray.svg'
import Icon7g from '../../images/skills/07_logical_gray.svg'
import Icon8g from '../../images/skills/08_Regulation_gray.svg'

export default {
  title: 'LearningProgress',
  component: LearningProgress,
}

export const num0_100 = () => (
  <LearningProgress
    src={Icon0}
    title={'はじめに'}
    mainColor={'#1890FF'}
    subColor={'#E6F7FF'}
    percent={100}
  />
)
export const num0_50 = () => (
  <LearningProgress
    src={Icon0}
    title={'はじめに'}
    mainColor={'#1890FF'}
    subColor={'#E6F7FF'}
    percent={50}
  />
)
export const num0_0 = () => (
  <LearningProgress
    src={Icon0g}
    title={'はじめに'}
    mainColor={'#D1D1D1'}
    subColor={'#FAFAFA'}
    percent={0}
  />
)
export const num1_100 = () => (
  <LearningProgress
    src={Icon1}
    title={'マーケティング\nスキル'}
    mainColor={'#FF4D4F'}
    subColor={'#FFF1F0'}
    percent={100}
  />
)
export const num1_50 = () => (
  <LearningProgress
    src={Icon1}
    title={'マーケティング\nスキル'}
    mainColor={'#FF4D4F'}
    subColor={'#FFF1F0'}
    percent={50}
  />
)
export const num1_0 = () => (
  <LearningProgress
    src={Icon1g}
    title={'マーケティング\nスキル'}
    mainColor={'#D1D1D1'}
    subColor={'#FAFAFA'}
    percent={0}
  />
)
export const num2_100 = () => (
  <LearningProgress
    src={Icon2}
    title={'WEB制作\nスキル'}
    mainColor={'#36CFC9'}
    subColor={'#E6FFFB'}
    percent={100}
  />
)
export const num2_50 = () => (
  <LearningProgress
    src={Icon2}
    title={'WEB制作\nスキル'}
    mainColor={'#36CFC9'}
    subColor={'#E6FFFB'}
    percent={50}
  />
)
export const num2_0 = () => (
  <LearningProgress
    src={Icon2g}
    title={'WEB制作\nスキル'}
    mainColor={'#D1D1D1'}
    subColor={'#FAFAFA'}
    percent={0}
  />
)
export const num3_100 = () => (
  <LearningProgress
    src={Icon3}
    title={'WEB知識\nスキル'}
    mainColor={'#40A9FF'}
    subColor={'#E6F7FF'}
    percent={100}
  />
)
export const num3_50 = () => (
  <LearningProgress
    src={Icon3}
    title={'WEB知識\nスキル'}
    mainColor={'#40A9FF'}
    subColor={'#E6F7FF'}
    percent={50}
  />
)
export const num3_0 = () => (
  <LearningProgress
    src={Icon3g}
    title={'WEB知識\nスキル'}
    mainColor={'#D1D1D1'}
    subColor={'#FAFAFA'}
    percent={0}
  />
)
export const num4_100 = () => (
  <LearningProgress
    src={Icon4}
    title={'PCスキル'}
    mainColor={'#52C41A'}
    subColor={'#F6FFED'}
    percent={100}
  />
)
export const num4_50 = () => (
  <LearningProgress
    src={Icon4}
    title={'PCスキル'}
    mainColor={'#52C41A'}
    subColor={'#F6FFED'}
    percent={50}
  />
)
export const num4_0 = () => (
  <LearningProgress
    src={Icon4g}
    title={'PCスキル'}
    mainColor={'#D1D1D1'}
    subColor={'#FAFAFA'}
    percent={0}
  />
)
export const num5_100 = () => (
  <LearningProgress
    src={Icon5}
    title={'ツールスキル'}
    mainColor={'#FF7A45'}
    subColor={'#FFF2E8'}
    percent={100}
  />
)
export const num5_50 = () => (
  <LearningProgress
    src={Icon5}
    title={'ツールスキル'}
    mainColor={'#FF7A45'}
    subColor={'#FFF2E8'}
    percent={50}
  />
)
export const num5_0 = () => (
  <LearningProgress
    src={Icon5g}
    title={'ツールスキル'}
    mainColor={'#D1D1D1'}
    subColor={'#FAFAFA'}
    percent={0}
  />
)
export const num6_100 = () => (
  <LearningProgress
    src={Icon6}
    title={'自動化スキル'}
    mainColor={'#9254DE'}
    subColor={'#F9F0FF'}
    percent={100}
  />
)
export const num6_50 = () => (
  <LearningProgress
    src={Icon6}
    title={'自動化スキル'}
    mainColor={'#9254DE'}
    subColor={'#F9F0FF'}
    percent={50}
  />
)
export const num6_0 = () => (
  <LearningProgress
    src={Icon6g}
    title={'自動化スキル'}
    mainColor={'#D1D1D1'}
    subColor={'#FAFAFA'}
    percent={0}
  />
)
export const num7_100 = () => (
  <LearningProgress
    src={Icon7}
    title={'ロジカル\nシンキング'}
    mainColor={'#FFC069'}
    subColor={'#FFF7E6'}
    percent={100}
  />
)
export const num7_50 = () => (
  <LearningProgress
    src={Icon7}
    title={'ロジカル\nシンキング'}
    mainColor={'#FFC069'}
    subColor={'#FFF7E6'}
    percent={50}
  />
)
export const num7_0 = () => (
  <LearningProgress
    src={Icon7g}
    title={'ロジカル\nシンキング'}
    mainColor={'#D1D1D1'}
    subColor={'#FAFAFA'}
    percent={0}
  />
)
export const num8_100 = () => (
  <LearningProgress
    src={Icon8}
    title={'法務\nスキル'}
    mainColor={'#597EF7'}
    subColor={'#F0F5FF'}
    percent={100}
  />
)
export const num8_50 = () => (
  <LearningProgress
    src={Icon8}
    title={'法務\nスキル'}
    mainColor={'#597EF7'}
    subColor={'#F0F5FF'}
    percent={50}
  />
)
export const num8_0 = () => (
  <LearningProgress
    src={Icon8g}
    title={'法務\nスキル'}
    mainColor={'#D1D1D1'}
    subColor={'#FAFAFA'}
    percent={0}
  />
)
