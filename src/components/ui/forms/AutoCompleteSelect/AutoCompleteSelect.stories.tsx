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

export const CustomItem: ComponentStoryObj<typeof AutoCompleteSelect> = {
  args: {
    items: [{name: 'test', id: 0}],
    itemToString: (item => item.name),
    placeholder: 'enter something',
    customItemComponent: ({item}) => <span><img width={30} height={30} alt={'cat'} src={'https://loremflickr.com/320/240/cat'}/>{item.name}</span>
  },
  async play () {
    const input = screen.getByPlaceholderText(`enter something`)
    await userEvent.type(input, 'test', {
      delay: 100
    })
  }
};
