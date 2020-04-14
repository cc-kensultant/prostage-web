/** @jsx jsx */
import { jsx, css } from '@emotion/core'

export type Props = {
  children: JSX.Element
  name: string
}

const style = css`
  color: red;
`

export const Hello = ({ children, name }: Props) => (
  <div css={style}>
    {children}
    {name}
  </div>
)
