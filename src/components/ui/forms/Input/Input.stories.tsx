import type { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { Input } from './';

export default {
  component: Input,
} as ComponentMeta<typeof Input>;

export const Default: ComponentStoryObj<typeof Input> = {
  args: {
  },
};