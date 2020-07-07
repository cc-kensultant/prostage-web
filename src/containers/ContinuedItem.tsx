/** @jsx jsx */
import { jsx } from '@emotion/core'
import { FC, useState, useEffect } from 'react'
import { ContinuedItem } from '../components/ContinuedItem'

import Icon0 from '../images/skills/00_introduction.svg'
import Icon1 from '../images/skills/01_marketing.svg'
import Icon2 from '../images/skills/02_web_production.svg'
import Icon3 from '../images/skills/03_web_knowledge.svg'
import Icon4 from '../images/skills/04_pc_skill.svg'
import Icon5 from '../images/skills/05_tool_skill.svg'
import Icon6 from '../images/skills/06_auto_skill.svg'
import Icon7 from '../images/skills/07_logical.svg'
import Icon8 from '../images/skills/08_Regulation.svg'

export const ContinuedItemContainer: FC = () => {
  const [datas, setDatas] = useState({
    icon: '',
    title: '',
    subTitle: '',
    mainColor: '',
    subColor: '',
    percent: 0,
    onContinueBtn: () => {},
    onDetailsLink: () => {},
  })
  useEffect(() => {
    // TODO:最後に実行したカリキュラムを取得
    const menuIndex = Math.floor(Math.random() * 9)
    // TODO:代償のスキル進行度を取得
    const percent = Math.floor(Math.random() * 11)
    switch (menuIndex) {
      case 0:
        setDatas({
          icon: Icon0,
          title: 'はじめに',
          subTitle: 'レッスン0',
          mainColor: '#1890FF',
          subColor: '#E6F7FF',
          percent: percent,
          onContinueBtn: () => {},
          onDetailsLink: () => {},
        })
        break
      case 1:
        setDatas({
          icon: Icon1,
          title: 'マーケティングスキル',
          subTitle: 'レッスン0',
          mainColor: '#FF4D4F',
          subColor: '#FFF1F0',
          percent: percent,
          onContinueBtn: () => {},
          onDetailsLink: () => {},
        })
        break
      case 2:
        setDatas({
          icon: Icon2,
          title: 'WEB制作スキル',
          subTitle: 'レッスン0',
          mainColor: '#36CFC9',
          subColor: '#E6FFFB',
          percent: percent,
          onContinueBtn: () => {},
          onDetailsLink: () => {},
        })
        break
      case 3:
        setDatas({
          icon: Icon3,
          title: 'WEB知識スキル',
          subTitle: 'レッスン0',
          mainColor: '#40A9FF',
          subColor: '#E6F7FF',
          percent: percent,
          onContinueBtn: () => {},
          onDetailsLink: () => {},
        })
        break
      case 4:
        setDatas({
          icon: Icon4,
          title: 'PCスキル',
          subTitle: 'レッスン0',
          mainColor: '#52C41A',
          subColor: '#F6FFED',
          percent: percent,
          onContinueBtn: () => {},
          onDetailsLink: () => {},
        })
        break
      case 5:
        setDatas({
          icon: Icon5,
          title: 'ツールスキル',
          subTitle: 'レッスン0',
          mainColor: '#FF7A45',
          subColor: '#FFF2E8',
          percent: percent,
          onContinueBtn: () => {},
          onDetailsLink: () => {},
        })
        break
      case 6:
        setDatas({
          icon: Icon6,
          title: '自動化スキル',
          subTitle: 'レッスン0',
          mainColor: '#9254DE',
          subColor: '#F9F0FF',
          percent: percent,
          onContinueBtn: () => {},
          onDetailsLink: () => {},
        })
        break
      case 7:
        setDatas({
          icon: Icon7,
          title: 'ロジカルシンキング',
          subTitle: 'レッスン0',
          mainColor: '#FFC069',
          subColor: '#FFF7E6',
          percent: percent,
          onContinueBtn: () => {},
          onDetailsLink: () => {},
        })
        break
      case 8:
        setDatas({
          icon: Icon8,
          title: '法務スキル',
          subTitle: 'レッスン0',
          mainColor: '#597EF7',
          subColor: '#F0F5FF',
          percent: percent,
          onContinueBtn: () => {},
          onDetailsLink: () => {},
        })
        break
      default:
        break
    }
  }, [])

  return (
    <ContinuedItem
      src={datas.icon}
      title={datas.title}
      subTitle={datas.subTitle}
      mainColor={datas.mainColor}
      subColor={datas.subColor}
      percent={datas.percent}
      onContinueBtn={datas.onContinueBtn}
      onDetailsLink={datas.onDetailsLink}
    />
  )
}
