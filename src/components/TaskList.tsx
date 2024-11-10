import Task from "./Task";

type Ttask = {
  id: string;
  title: string;
  state: "DEFAULT" | "PINNED" | "ARCHIVED";
};

type TaskListProps = {
  loading: boolean;
  tasks: Ttask[];
  onPinTask: (id: string) => void;
  onArchiveTask: (id: string) => void;
};

export default function TaskList({ loading, tasks, onPinTask, onArchiveTask }: TaskListProps) {
  const events = {
    onPinTask,
    onArchiveTask,
  };

  if (loading) {
    return <div>로딩 중...</div>;
  }

  if (tasks.length === 0) {
    return <div>업무가 없음!</div>;
  }

  return (
    <div className="space-y-2">
      {tasks.map((task) => (
        <Task key={task.id} task={task} {...events} />
      ))}
    </div>
  );
}
