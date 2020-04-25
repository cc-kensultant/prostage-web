/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import useSWR from 'swr'
import { fetcher } from '../../utils/fetcher'

const style = css`
  color: red;
`

export const SignIn = () => {
  const { data } = useSWR('dummy', fetcher)
  console.log(data)
  return <div css={style}>ログインページ</div>
}
