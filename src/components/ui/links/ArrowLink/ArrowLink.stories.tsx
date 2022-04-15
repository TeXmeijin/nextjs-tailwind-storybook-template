import type { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { ArrowLink } from "./";

export default {
  component: ArrowLink,
} as ComponentMeta<typeof ArrowLink>;

export const Default: ComponentStoryObj<typeof ArrowLink> = {
  args: { href: "/", children: "ArrowLink" },
};
