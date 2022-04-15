import type { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { UnStyledLink } from '.';

export default {
  component: UnStyledLink,
} as ComponentMeta<typeof UnStyledLink>;

export const Default: ComponentStoryObj<typeof UnStyledLink> = {
  args: {
    href: '/',
    children: 'UnstyledLink',
  },
};
