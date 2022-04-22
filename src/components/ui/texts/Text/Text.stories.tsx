import type { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { Text } from './';

export default {
  component: Text,
} as ComponentMeta<typeof Text>;

export const Default: ComponentStoryObj<typeof Text> = {
  args: {
    children: '「ではみなさんは、そういうふうに川だと云いわれたり、乳の流れたあとだと云われたりしていたこのぼんやりと白いものがほんとうは何かご承知ですか。」'
  },
};
export const Bold: ComponentStoryObj<typeof Text> = {
  args: {
    children: '「ではみなさんは、そういうふうに川だと云いわれたり、乳の流れたあとだと云われたりしていたこのぼんやりと白いものがほんとうは何かご承知ですか。」',
    bold: true
  },
};
export const XSmall: ComponentStoryObj<typeof Text> = {
  args: {
    children: '「ではみなさんは、そういうふうに川だと云いわれたり、乳の流れたあとだと云われたりしていたこのぼんやりと白いものがほんとうは何かご承知ですか。」',
    size: 'xs',
  },
};
export const Small: ComponentStoryObj<typeof Text> = {
  args: {
    children: '「ではみなさんは、そういうふうに川だと云いわれたり、乳の流れたあとだと云われたりしていたこのぼんやりと白いものがほんとうは何かご承知ですか。」',
    size: 'sm',
  },
};
export const Large: ComponentStoryObj<typeof Text> = {
  args: {
    children: '「ではみなさんは、そういうふうに川だと云いわれたり、乳の流れたあとだと云われたりしていたこのぼんやりと白いものがほんとうは何かご承知ですか。」',
    size: 'lg',
  },
};
export const XLarge: ComponentStoryObj<typeof Text> = {
  args: {
    children: '「ではみなさんは、そういうふうに川だと云いわれたり、乳の流れたあとだと云われたりしていたこのぼんやりと白いものがほんとうは何かご承知ですか。」',
    size: 'xl',
  },
};
export const XLargeBold: ComponentStoryObj<typeof Text> = {
  args: {
    children: '「ではみなさんは、そういうふうに川だと云いわれたり、乳の流れたあとだと云われたりしていたこのぼんやりと白いものがほんとうは何かご承知ですか。」',
    size: 'xl',
    bold: true,
  },
};
