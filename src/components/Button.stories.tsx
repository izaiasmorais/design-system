import { Meta, StoryObj } from "@storybook/react";
import { Button, ButtonProps } from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  args: {
    children: "Button view.",
  },
  argTypes: {},
} as Meta<ButtonProps>;

export const Default: StoryObj<ButtonProps> = {};
export const White: StoryObj<ButtonProps> = {
  args: {
    children: "White button view.",
    className: "bg-white text-black hover:bg-gray-200 ring-black ",
  },
};
