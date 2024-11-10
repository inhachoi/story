import Task from "./Task";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Task> = {
  title: "Category/Task",
  component: Task,
  tags: ["autodocs"],
  argTypes: {
    onArchiveTask: { action: "onArchiveTask" },
    onPinTask: { action: "onPinTask" },
  },
};

export default meta;

type Story = StoryObj<typeof Task>;

export const Default: Story = {
  args: {
    task: {
      id: "1",
      title: "기본 업무",
      state: "DEFAULT",
    },
  },
};

export const Pinned: Story = {
  args: {
    task: {
      id: "2",
      title: "고정된 업무",
      state: "PINNED",
    },
  },
};

export const Archived: Story = {
  args: {
    task: {
      id: "3",
      title: "완료한 업무",
      state: "ARCHIVED",
    },
  },
};
