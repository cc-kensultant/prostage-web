/** @jsx jsx */
import { jsx } from '@emotion/core'
import { FC, useState, useEffect } from 'react'
import { LearningProgress } from '../components/LearningProgress'

import Icon0 from '../images/skills/00_introduction.svg'
import Icon1 from '../images/skills/01_marketing.svg'
import Icon2 from '../images/skills/02_web_production.svg'
import Icon3 from '../images/skills/03_web_knowledge.svg'
import Icon4 from '../images/skills/04_pc_skill.svg'
import Icon5 from '../images/skills/05_tool_skill.svg'
import Icon6 from '../images/skills/06_auto_skill.svg'
import Icon7 from '../images/skills/07_logical.svg'
import Icon8 from '../images/skills/08_Regulation.svg'
import Icon0g from '../images/skills/00_introduction_gray.svg'
import Icon1g from '../images/skills/01_marketing_gray.svg'
import Icon2g from '../images/skills/02_web_production_gray.svg'
import Icon3g from '../images/skills/03_web_knowledge_gray.svg'
import Icon4g from '../images/skills/04_pc_skill_gray.svg'
import Icon5g from '../images/skills/05_tool_skill_gray.svg'
import Icon6g from '../images/skills/06_auto_skill_gray.svg'
import Icon7g from '../images/skills/07_logical_gray.svg'
import Icon8g from '../images/skills/08_Regulation_gray.svg'

export type Props = {
  menuIndex: number
}

export const LearningProgressContainer: FC<Props> = ({ menuIndex }) => {
  const [datas, setDatas] = useState({
    icon: '',
    title: '',
    mainColor: '',
    subColor: '',
    percent: 0,
  })
  useEffect(() => {
    // 代償のスキル進行度を取得
    const percent = Math.floor(Math.random() * 101)
    switch (menuIndex) {
      case 0:
        setDatas({
          icon: percent > 0 ? Icon0 : Icon0g,
          title: 'はじめに',
          mainColor: percent > 0 ? '#1890FF' : '#D1D1D1',
          subColor: percent > 0 ? '#E6F7FF' : '#FAFAFA',
          percent: percent,
        })
        break
      case 1:
        setDatas({
          icon: percent > 0 ? Icon1 : Icon1g,
          title: 'マーケティング\nスキル',
          mainColor: percent > 0 ? '#FF4D4F' : '#D1D1D1',
          subColor: percent > 0 ? '#FFF1F0' : '#FAFAFA',
          percent: percent,
        })
        break
      case 2:
        setDatas({
          icon: percent > 0 ? Icon2 : Icon2g,
          title: 'WEB制作\nスキル',
          mainColor: percent > 0 ? '#36CFC9' : '#D1D1D1',
          subColor: percent > 0 ? '#E6FFFB' : '#FAFAFA',
          percent: percent,
        })
        break
      case 3:
        setDatas({
          icon: percent > 0 ? Icon3 : Icon3g,
          title: 'WEB知識\nスキル',
          mainColor: percent > 0 ? '#40A9FF' : '#D1D1D1',
          subColor: percent > 0 ? '#E6F7FF' : '#FAFAFA',
          percent: percent,
        })
        break
      case 4:
        setDatas({
          icon: percent > 0 ? Icon4 : Icon4g,
          title: 'PCスキル',
          mainColor: percent > 0 ? '#52C41A' : '#D1D1D1',
          subColor: percent > 0 ? '#F6FFED' : '#FAFAFA',
          percent: percent,
        })
        break
      case 5:
        setDatas({
          icon: percent > 0 ? Icon5 : Icon5g,
          title: 'ツールスキル',
          mainColor: percent > 0 ? '#FF7A45' : '#D1D1D1',
          subColor: percent > 0 ? '#FFF2E8' : '#FAFAFA',
          percent: percent,
        })
        break
      case 6:
        setDatas({
          icon: percent > 0 ? Icon6 : Icon6g,
          title: '自動化スキル',
          mainColor: percent > 0 ? '#9254DE' : '#D1D1D1',
          subColor: percent > 0 ? '#F9F0FF' : '#FAFAFA',
          percent: percent,
        })
        break
      case 7:
        setDatas({
          icon: percent > 0 ? Icon7 : Icon7g,
          title: 'ロジカル\nシンキング',
          mainColor: percent > 0 ? '#FFC069' : '#D1D1D1',
          subColor: percent > 0 ? '#FFF7E6' : '#FAFAFA',
          percent: percent,
        })
        break
      case 8:
        setDatas({
          icon: percent > 0 ? Icon8 : Icon8g,
          title: '法務\nスキル',
          mainColor: percent > 0 ? '#597EF7' : '#D1D1D1',
          subColor: percent > 0 ? '#F0F5FF' : '#FAFAFA',
          percent: percent,
        })
        break
      default:
        break
    }
  }, [menuIndex])
  return (
    <LearningProgress
      src={datas.icon}
      title={datas.title}
      mainColor={datas.mainColor}
      subColor={datas.subColor}
      percent={datas.percent}
    />
  )
}
