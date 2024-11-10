import { Meta, StoryObj } from "@storybook/react";
import Button from "./Button";

const meta: Meta<typeof Button> = {
  title: "Category/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    onClick: { action: "clicked" },
    variant: {
      control: "select",
      options: ["blue", "gray"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Blue: Story = {
  args: {
    label: "Blue Button",
    variant: "blue",
  },
};

export const Gray: Story = {
  args: {
    label: "Gray Button 222",
    variant: "gray",
  },
};
