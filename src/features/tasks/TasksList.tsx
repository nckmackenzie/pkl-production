import { TASKS } from '../jobcards/constants';
import TaskItem from './TaskItem';

export default function TasksList() {
  return (
    <div className="grid grid-cols-4 gap-8">
      {TASKS.map(task => (
        <TaskItem
          key={task.id}
          hrsAssigned={task.hrsAssigned}
          hrsTaken={task.hrsTaken}
          jobcardNo={task.jobcardNo}
        />
      ))}
    </div>
  );
}
