/** @jsx jsx */
import { jsx } from '@emotion/core'
import { FC, useState, useEffect } from 'react'
import { UserIcon } from '../components/UserIcon'
// TODO: DBと繋いだら消す
import Image from '../images/UserIcon.svg'

export const UserIconContainer: FC = () => {
  const [imageSrc, setImageSrc] = useState('')
  useEffect(() => {
    // TODO: DBから、このユーザーのアイコン画像を取得する
    setImageSrc(Image)
  }, [])
  return (
    // TODO: 引数を差し替え
    <UserIcon imageSrc={imageSrc} />
  )
}
