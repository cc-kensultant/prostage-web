/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { FC } from 'react'

export type Props = {
  icon: any
  curriculum: string
  explanation: string
  maincolor: string
  subcolor: string
}

export const SkilCard: FC<Props> = ({ icon, curriculum, explanation, maincolor, subcolor }) => (
  <div css={styles.base}>
    <div css={styles.base} style={{ background: subcolor }}>
      　<div css={styles.icon(maincolor)}>{icon()}</div>
    </div>
    <div css={styles.title.base}>
      <h3 css={styles.title.text}>{curriculum}</h3>
      <h4 css={styles.title.subText}>{explanation}</h4>
    </div>
  </div>
)

const styles = {
  base: css`
    position: absolute;
    width: 320px;
    height: 240px;

    border-radius: 3px 3px;
`,
  icon: (color: string) => css`
    position: absolute;
    fill: ${color};
    left: 118.33px;
    right: 118.33px;
    top: 78.33px;
    bottom: 78.33px;
`,
  title: {
    base: css`
      height: 47px;
`,
    text: css`
      position: absolute;
      width: 320px;
      height: 27px;
      top: 260px;

      font-style: normal;
      font-weight: bold;
      font-size: 18px;
      line-height: 27px;
      text-align: center;
`,
    subText: css`
      position: absolute;
      width: 320px;
      height: 48px;
      top: 342px;

      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 24px;
`,
  },
}
