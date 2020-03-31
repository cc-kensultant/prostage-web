---
name: 'page'
description: 'Generate standard React component.'
message: 'Please enter component name.'
root: 'src/pages'
output: '**/*'
ignore: []
---

# `{{ input | pascal }}/index.ts`x

```javascript
export { {{ input | pascal }} } from './{{ input | pascal }}';
```

# `{{ input | pascal }}/{{ input | pascal }}.ts`x

```javascript
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import useSWR from 'swr'
import { fetcher } from '../utils/fetcher'

export type Props = {
  children: JSX.Element,
}

const style = css`
  color: red;
`

export const {{ input | pascal }} = ({ children }: Props) => {
  const { data } = useSWR('dummy', fetcher)
  console.log(data)
  return (
    <div css={style}>{children}</div>
  )
};
```