import type { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { UnstyledLink } from ".";

export default {
  component: UnstyledLink,
} as ComponentMeta<typeof UnstyledLink>;

export const Default: ComponentStoryObj<typeof UnstyledLink> = {
  args: {
    href: "/",
    children: "UnstyledLink",
  },
};
