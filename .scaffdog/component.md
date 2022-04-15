---
name: 'component'
root: 'src/components'
output: '**/*'
ignore: []
questions:
  name: 'Component name:'
---

# `{{ inputs.name | pascal }}.tsx`

```tsx
import type { FC } from 'react';

type Props = {

}

export const {{ inputs.name | pascal }}: FC<Props> = () => {}
```

# `{{ inputs.name | pascal }}.stories.tsx`

```tsx
import type { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { {{ inputs.name | pascal }} } from './';

export default {
  component: {{ inputs.name | pascal }},
} as ComponentMeta<typeof {{ inputs.name | pascal }}>;

export const Default: ComponentStoryObj<typeof {{ inputs.name | pascal }}> = {
  args: {
  },
};
```

# `index.tsx`

```tsx
export * from './{{ inputs.name | pascal }}';
```