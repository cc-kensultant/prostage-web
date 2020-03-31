/** @jsx jsx */
import { jsx, css } from '@emotion/core'

export type Props = {
  children: JSX.Element,
}

const style = css`
  color: red;
`

export const Hello = ({ children }: Props) => (
  <div css={style}>{children}</div>
);