import { Meta, StoryObj } from "@storybook/react";
import TaskList from "./TaskList";
import * as TaskStories from "./Task.stories";

const meta: Meta<typeof TaskList> = {
  component: TaskList,
  title: "Category/TaskList",
  decorators: [(story) => <div>{story()}</div>],
  tags: ["autodocs"],
  args: {
    ...(TaskStories.Default.args || {}),
  },
};

export default meta;

type Story = StoryObj<typeof TaskList>;

export const Default: Story = {
  args: {
    tasks: [
      { ...(TaskStories.Default.args?.task || {}), id: "1", title: "Task 1", state: "DEFAULT" },
      { ...(TaskStories.Default.args?.task || {}), id: "2", title: "Task 2", state: "DEFAULT" },
      { ...(TaskStories.Default.args?.task || {}), id: "3", title: "Task 3", state: "DEFAULT" },
      { ...(TaskStories.Default.args?.task || {}), id: "4", title: "Task 4", state: "DEFAULT" },
      { ...(TaskStories.Default.args?.task || {}), id: "5", title: "Task 5", state: "DEFAULT" },
      { ...(TaskStories.Default.args?.task || {}), id: "6", title: "Task 6", state: "DEFAULT" },
    ],
  },
};

export const WithPinnedTasks: Story = {
  args: {
    tasks: [
      ...(Default.args?.tasks?.slice(0, 5) || []),
      { id: "6", title: "Task 6 (pinned)", state: "PINNED" },
    ],
  },
};

export const Loading: Story = {
  args: {
    tasks: [],
    loading: true,
  },
};

export const Empty: Story = {
  args: {
    ...Loading.args,
    loading: false,
  },
};
