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
export { {{ input | pascal }} } from './{{ input | pascal }}'

```

# `{{ input | pascal }}/{{ input | pascal }}.tsx`

```javascript
/** @jsx jsx */
import { jsx, css } from '@emotion/core'
import { FC } from 'react'

export type Props = {
  hoge: String
}

export const {{ input | pascal }}: FC<Props> = ({ hoge, children }) => (
  <div css={style}>
    {hoge} {children ? `| ${children}` : ''}
  </div>
)

const style = css`
  color: red;
`

```

# `{{ input | pascal }}/{{ input | pascal }}.stories.tsx`

```javascript
import React from 'react'

/* eslint-disable */
import { action } from '@storybook/addon-actions'
/* eslint-disable */

import { {{ input | pascal }} } from './{{ input | pascal }}'

export default {
  title: '{{ input | pascal }}',
  component: {{ input | pascal }},
}

export const Default = () => (
  <{{ input | pascal }} hoge="hogehoge">
    <p>dataX</p>
  </{{ input | pascal }}>
)
```
