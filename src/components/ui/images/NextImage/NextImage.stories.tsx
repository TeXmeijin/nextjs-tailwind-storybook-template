import type { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { NextImage } from './';

export default {
  component: NextImage,
} as ComponentMeta<typeof NextImage>;

export const Default: ComponentStoryObj<typeof NextImage> = {
  args: {
    src: 'https://loremflickr.com/320/240/girl',
    width: 320,
    height: 240,
  },
};
