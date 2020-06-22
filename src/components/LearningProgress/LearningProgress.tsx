/** @jsx jsx */
import { jsx, css, SerializedStyles } from '@emotion/core'
import { FC, Fragment } from 'react'

export type Props = {
  src: string
  title: string
  mainColor: string
  subColor: string
  percent: number
}

export const LearningProgress: FC<Props> = ({ src, title, mainColor, subColor, percent }) => (
  <Fragment>
    <div css={styles.base}>
      <div css={styles.circle.base(mainColor, subColor, percent)}>
        <div css={styles.circle.inner(subColor)}>
          <img src={src} width="60" height="60" alt={title} />
        </div>
      </div>
      <div css={styles.title}>{title}</div>
    </div>
  </Fragment>
)

const styles = {
  base: css`
    width: 96px;
    height: 145px;
  `,
  circle: {
    base: (mainColor: string, subColor: string, percent: number): SerializedStyles => css`
      position: relative;
      width: 96px;
      height: 96px;
      background: ${mainColor};
      border-radius: 50%;
      text-align: center;
      overflow: hidden;
      z-index: 1;
      ::before {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: -48px;
        width: 96px;
        height: 96px;
        background: ${subColor};
        transform-origin: right 48px;
        z-index: 2;
        ${percent <= 50
          ? `transform: rotate(0deg); background: ${subColor};`
          : `transform: rotate(${(180 / 50) * (percent - 50)}deg);  background: ${subColor};`}
      }
      ::after {
        content: '';
        display: block;
        position: absolute;
        top: 0px;
        left: 48px;
        width: 96px;
        height: 96px;
        background: ${subColor};
        transform-origin: left 48px;
        z-index: 3;
        ${percent <= 50
          ? `transform: rotate(${(180 / 50) * percent}deg); background: ${subColor};`
          : `transform: rotate(360deg); background: ${mainColor};`}
      }
    `,
    inner: (subColor: string): SerializedStyles => css`
      position: absolute;
      top: 3px;
      left: 3px;
      width: 90px;
      height: 75px;
      padding-top: 15px;
      background: ${subColor};
      border-radius: 50%;
      z-index: 4;
    `,
  },
  title: css`
    white-space: pre-line;
    margin-top: 14px;
    width: 100%;
    font-family: Mplus 1p;
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    text-align: center;
    color: rgba(16, 32, 45, 0.54);
  `,
}
