/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { FC } from 'react'
import CameraIcon from '../../images/camera_icon.svg'

export type Props = {
  imageSrc: string
}

export const UserIcon: FC<Props> = ({ imageSrc }) => {
  return (
    <button type="button" css={styles.cover.button}>
      <img className="camera-icon" src={CameraIcon} alt="ホバー画像" css={styles.cover.icon} />
      <img className="image-src" src={imageSrc} alt="アイコン画像" css={styles.cover.img} />
    </button>
  )
}

const styles = {
  cover: {
    button: css`
      position: relative;
      width: 160px;
      height: 160px;
      border-radius: 80px;
      cursor: pointer;
      border: none;
      background: #000;
      padding: unset;
      outline: none;
      &:hover,
      &:focus {
        .image-src {
          opacity: 0.7;
        }
        .camera-icon {
          display: block;
        }
      }
    `,
    img: css`
      transition: opacity 0.2s;
      width: 160px;
      height: 160px;
    `,
    icon: css`
      transition: display 0.2s;
      display: none;
      position: absolute;
      top: calc(50% - 16px);
      left: calc(50% - 14.5px);
      width: 32px;
      height: 29px;
    `,
  },
}
