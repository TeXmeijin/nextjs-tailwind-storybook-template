import type { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { AutoCompleteSelect } from './';

export default {
  component: AutoCompleteSelect,
} as ComponentMeta<typeof AutoCompleteSelect>;

export const Default: ComponentStoryObj<typeof AutoCompleteSelect> = {
  args: {
  },
};