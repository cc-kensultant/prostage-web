/** @jsx jsx */
import { jsx } from '@emotion/core'
import { FC, useState, useEffect } from 'react'
import { CoverImage } from '../components/CoverImage'
// TODO: DBと繋いだら消す
import Image from '../images/CoverImage.svg'

export const CoverImageContainer: FC = () => {
  const [imageSrc, setImageSrc] = useState('')
  useEffect(() => {
    // TODO: DBから、このユーザーのカバー画像を取得する
    setImageSrc(Image)
  }, [])
  return (
    // TODO: 引数を差し替え
    <CoverImage imageSrc={imageSrc} />
  )
}
