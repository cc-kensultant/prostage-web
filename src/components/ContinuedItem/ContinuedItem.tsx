/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { FC } from 'react'

export type Props = {
  src: string
  title: string
  subTitle: string
  mainColor: string
  subColor: string
  percent: number
  onContinueBtn: () => void
  onDetailsLink: () => void
}

export const ContinuedItem: FC<Props> = ({
  src,
  title,
  subTitle,
  mainColor,
  subColor,
  percent,
  onContinueBtn,
  onDetailsLink,
}) => (
  <div css={styles.base}>
    <div css={styles.icon(subColor)}>
      <img src={src} width="80" height="80" alt={title} />
    </div>
    <div css={styles.title.base}>
      <h3 css={styles.title.text}>{title}</h3>
      <h4 css={styles.title.subText}>{subTitle}</h4>
      <div css={styles.progress.flex}>
        <div css={styles.progress.base}>
          <div css={styles.progress.item(mainColor, percent)}></div>
        </div>
        <div css={styles.progress.text}>{percent}/10</div>
      </div>
    </div>
    <div css={styles.links.base}>
      <button type="button" css={styles.links.btn} onClick={onContinueBtn}>
        続きから始める
      </button>
      <button type="button" css={styles.links.link} onClick={onDetailsLink}>
        コース詳細へ &gt;
      </button>
    </div>
  </div>
)

const styles = {
  base: css`
    margin-top: 20px;
    width: 100%;
    border: 1px solid rgba(16, 32, 45, 0.12);
    border-radius: 3px;
    display: flex;
  `,
  icon: (color: string) => css`
    background: ${color};
    padding: 40px;
    width: 80px;
    height: 80px;
    border-radius: 3px 0px 0px 3px;
  `,
  title: {
    base: css`
      padding-left: 32px;
    `,
    text: css`
      margin-top: 24px;
      font-family: Mplus 1p;
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 28px;
      color: #333333;
    `,
    subText: css`
      margin-top: 40px;
      font-family: Noto Sans CJK JP;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 21px;
      letter-spacing: 0.01em;
      color: rgba(16, 32, 45, 0.54);
    `,
  },
  progress: {
    flex: css`
      margin-top: 12px;
      display: flex;
    `,
    base: css`
      width: 372px;
      height: 12px;
      background: #fafafa;
      border-radius: 22px;
    `,
    item: (color: string, percent: number) => css`
      background: ${color};
      width: ${percent * 10}%;
      height: 100%;
      border-radius: 22px;
    `,
    text: css`
      margin-left: 12px;
      font-family: Noto Sans CJK JP;
      font-style: normal;
      font-weight: normal;
      font-size: 13px;
      line-height: 13px;
      letter-spacing: 0.01em;
      color: rgba(16, 32, 45, 0.54);
    `,
  },
  links: {
    base: css`
      margin-left: auto;
      padding: 40px 32px;
      display: flex;
      flex-direction: column;
    `,
    btn: css`
      width: 160px;
      height: 40px;
      font-family: Noto Sans CJK JP;
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 21px;
      color: #ffffff;
      padding: unset;
      border: none;
      background: #1890ff;
      border-radius: 58px;
      transition: opacity 0.2s;
      cursor: pointer;
      &:hover,
      &:focus {
        outline: none;
        opacity: 0.5;
      }
    `,
    link: css`
      font-family: Noto Sans CJK JP;
      font-style: normal;
      font-weight: normal;
      font-size: 13px;
      line-height: 13px;
      color: rgba(16, 32, 45, 0.54);
      width: 160px;
      height: 40px;
      padding: unset;
      border: none;
      background: unset;
      transition: opacity 0.2s;
      cursor: pointer;
      &:hover,
      &:focus {
        outline: none;
        opacity: 0.5;
      }
    `,
  },
}
