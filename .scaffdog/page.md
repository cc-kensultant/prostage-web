---
name: 'page'
description: 'Generate standard React component.'
message: 'Please enter component name.'
root: 'src/pages'
output: '**/*'
ignore: []
---

# `{{ input | pascal }}/index.tsx`

```javascript
export { {{ input | pascal }} } from './{{ input | pascal }}'

```

# `{{ input | pascal }}/{{ input | pascal }}.tsx`

```javascript
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { FC } from 'react'
import useSWR from 'swr'
import { fetcher } from '../../utils/fetcher'

export type Props = {
  hoge: String
}

export const {{ input | pascal }}: FC<Props> = ({ hoge, children }) => {
  const { data } = useSWR('dummy', fetcher)
  console.log(data)
  return (
    <div css={style}>
      {hoge} {children ? `| ${children}` : ''}
    </div>
  )
}

const style = css`
  color: red;
`

```
