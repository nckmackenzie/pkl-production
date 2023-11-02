import { JOBCARDS, TASKS } from '../jobcards/constants';
import TaskItem from './TaskItem';

export default function TasksList() {
  const filteredTasks = TASKS.filter(task => {
    // Find the corresponding job card by jobcardNo
    const matchingJobCard = JOBCARDS.find(
      jobCard => jobCard.jobcardNo === task.jobcardNo
    );

    // Check if a matching job card was found and its status is not completed
    return matchingJobCard && matchingJobCard.status !== 'completed';
  });

  return (
    <div className="grid grid-cols-4 gap-8">
      {filteredTasks.map(task => (
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
