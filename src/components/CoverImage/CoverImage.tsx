/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { FC } from 'react'
import CameraIcon from '../../images/camera_icon.svg'

export type Props = {
  imageSrc: string
}

export const CoverImage: FC<Props> = ({ imageSrc }) => {
  return (
    <button type="button" css={styles.cover.button}>
      <img className="camera-icon" src={CameraIcon} alt="ホバー画像" css={styles.cover.icon} />
      <img className="image-src" src={imageSrc} alt="カバー画像" css={styles.cover.img} />
    </button>
  )
}

const styles = {
  cover: {
    button: css`
      position: relative;
      width: 100vw;
      cursor: pointer;
      border: none;
      background: #000;
      padding: unset;
      outline: none;
      &:hover,
      &:focus {
        .image-src {
          opacity: 0.6;
        }
        .camera-icon {
          display: block;
        }
      }
    `,
    img: css`
      transition: opacity 0.2s;
      width: 100vw;
    `,
    icon: css`
      transition: display 0.2s;
      display: none;
      position: absolute;
      top: 50%;
      left: 50%;
      width: 37px;
      height: 34px;
    `,
  },
}
