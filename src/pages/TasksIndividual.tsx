import { useParams } from 'react-router-dom';
import { TASKS } from '@/features/jobcards/constants';
import notFoundSvg from '@/assets/undraw_cancel_re_pkdm.svg';
import TaskItem from '@/features/tasks/TaskItem';

export default function TasksIndividual() {
  const { staffid } = useParams();
  const tasksByStaff = TASKS.filter(task => task.staff === staffid);

  return (
    <div className="grid grid-cols-4 gap-8">
      {tasksByStaff.length > 0 ? (
        tasksByStaff.map(task => (
          <TaskItem
            key={task.id}
            hrsAssigned={task.hrsAssigned}
            hrsTaken={task.hrsTaken}
            jobcardNo={task.jobcardNo}
          />
        ))
      ) : (
        <NoJobs />
      )}
    </div>
  );
}

function NoJobs() {
  return (
    <div className="flex flex-col items-center mt-24">
      <img src={notFoundSvg} alt="Not Found Image" className="w-36 h-auto" />
      <div className="text-xl font-semibold mt-8">No tasks found</div>
    </div>
  );
}
