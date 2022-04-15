import type { ComponentMeta, ComponentStoryObj } from "@storybook/react";
import { PrimaryLink } from "./";

export default {
  component: PrimaryLink,
} as ComponentMeta<typeof PrimaryLink>;

export const Default: ComponentStoryObj<typeof PrimaryLink> = {
  args: {
    href: "/",
    children: "PrimaryLink",
  },
};
