import { Meta, StoryObj } from "@storybook/react";
import { TextInput, PropsRoot } from "./TextInput";
import { Envelope } from "phosphor-react";

export default {
  title: "Components/TextInput",
  component: TextInput.Root,
  args: {
    children: (
      <>
        <TextInput.Icon>
          <Envelope />
        </TextInput.Icon>
        <TextInput.Input placeholder="Digite seu e-mail" />
      </>
    ),
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<PropsRoot>;

export const Default: StoryObj<PropsRoot> = {};
