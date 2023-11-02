import { useState } from 'react';
import PerformanceActions from './PerformanceActions';
import PerformanceTable from './PerformanceTable';
import PerformanceStats from './PerformanceStats';
import { TASKS } from '../jobcards/constants';

export default function PerformanceBox() {
  const [displayComponent, setDisplayComponent] = useState<boolean>(false);
  const tasks = TASKS.filter(task => task.staff === '9070');

  return (
    <div className="space-y-8">
      {displayComponent ? (
        <PerformanceStats
          onChangeDisplayComponent={setDisplayComponent}
          tasksAssigned={tasks.length}
          tasksCompleted={2}
          tasksPaused={2}
          tasksOngoing={2}
        />
      ) : (
        <PerformanceActions onChangeDisplayComponent={setDisplayComponent} />
      )}
      {displayComponent && <PerformanceTable tasks={tasks} />}
    </div>
  );
}
