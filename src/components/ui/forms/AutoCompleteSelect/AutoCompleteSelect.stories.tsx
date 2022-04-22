import type { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { AutoCompleteSelect } from './';
import {screen, userEvent} from "@storybook/testing-library";

export default {
  component: AutoCompleteSelect,
} as ComponentMeta<typeof AutoCompleteSelect>;

export const Default: ComponentStoryObj<typeof AutoCompleteSelect> = {
  args: {
    items: [{name: 'test', id: 0}],
    itemToString: (item => item.name),
    placeholder: 'enter something'
  },
  async play () {
    const input = screen.getByPlaceholderText(`enter something`)
    await userEvent.type(input, 'test', {
      delay: 100
    })
  }
};
