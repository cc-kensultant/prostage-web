---
name: 'component'
description: 'Generate standard React component.'
message: 'Please enter component name.'
root: 'src/components'
output: '**/*'
ignore: []
---

# `{{ input | pascal }}/index.tsx`

```javascript
export { {{ input | pascal }} } from './{{ input | pascal }}';
```

# `{{ input | pascal }}/{{ input | pascal }}.tsx`

```javascript
/** @jsx jsx */
import { jsx, css } from '@emotion/core'

export type Props = {
  children: JSX.Element,
}

const style = css`
  color: red;
`

export const {{ input | pascal }} = ({ children }: Props) => (
  <div css={style}>{children}</div>
);
```