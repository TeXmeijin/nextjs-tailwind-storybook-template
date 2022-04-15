import type { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { TextLink } from ".";

export default {
  component: TextLink,
} as ComponentMeta<typeof TextLink>;

export const Default: ComponentStoryObj<typeof TextLink> = {
  args: {
    href: "/",
    children: "TextLink",
  },
};
