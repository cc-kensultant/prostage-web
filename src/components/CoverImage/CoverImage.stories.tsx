import React from 'react'
import { CoverImage } from './CoverImage'
import Image from '../../images/CoverImage.svg'

export default {
  title: 'CoverImage',
  component: CoverImage,
}

export const Default = () => <CoverImage imageSrc={Image} />
