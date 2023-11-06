import TaskItem from './TaskItem';
import Loader from '@/components/ui/loader';

import { useGetTasks } from './use-get-tasks';

export default function TasksList() {
  const { isLoading, data } = useGetTasks();

  if (isLoading) return <Loader type="spinner" />;
  if (!data) return <p>No tasks to display</p>;

  return (
    <div className="grid grid-cols-4 gap-8">
      {data.length > 0 ? (
        data.map(task => (
          <TaskItem
            key={task.id}
            id={task.id}
            hrsAssigned={task.assigned_hrs}
            hrsTaken={0}
            jobcardNo={task.jobcard_no}
            status={task.status}
            subject={task.subject}
            department={task.department_name}
          />
        ))
      ) : (
        <p>No tasks matching defined criteria</p>
      )}

      {/* {data.map(task => (
        <TaskItem
          key={task.id}
          hrsAssigned={task.assigned_hrs}
          hrsTaken={0}
          jobcardNo={task.jobcard_no}
          status={task.status}
          subject={task.subject}
        />
      ))} */}
    </div>
  );
}
