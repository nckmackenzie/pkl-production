import { Button } from '@/components/ui/button';
import { Activity, CheckCheck, ChevronLeft, Hand, Repeat2 } from 'lucide-react';
import CardStat from '../dashboard/CardStat';

type PerformanceStatsProps = {
  onChangeDisplayComponent: (value: boolean) => void;
  tasksAssigned: number;
  tasksCompleted: number;
  tasksPaused: number;
  tasksOngoing: number;
};

export default function PerformanceStats({
  onChangeDisplayComponent,
  tasksAssigned,
  tasksCompleted,
  tasksPaused,
}: PerformanceStatsProps) {
  return (
    <div className="space-y-4">
      <Button
        variant="ghost"
        size="sm"
        className="hover:text-blue-900 hover:dark:text-blue-500"
        onClick={() => onChangeDisplayComponent(false)}
      >
        <ChevronLeft className="w-4 h-4" />
        <span className="text-sm ">&nbsp;Back</span>
      </Button>
      <div className="flex gap-4">
        <div className="flex-1">
          <div className="grid grid-cols-12 gap-4">
            <CardStat
              className="col-span-6"
              title="No of tasks assigned"
              value={tasksAssigned}
              icon={Activity}
              bgColor="bg-purple-500/10"
              size="sm"
              textColor="text-purple-500"
            />
            <CardStat
              className="col-span-6"
              title="No of completed tasks"
              value={tasksCompleted}
              bgColor="bg-green-500/10"
              textColor="text-green-500"
              size="sm"
              icon={CheckCheck}
            />
            <CardStat
              className="col-span-6"
              title="No of ongoing tasks"
              value={tasksCompleted}
              bgColor="bg-blue-500/10"
              textColor="text-blue-500"
              size="sm"
              icon={Repeat2}
            />
            <CardStat
              className="col-span-6"
              title="No of paused tasks"
              value={tasksPaused}
              bgColor="bg-red-500/10"
              textColor="text-red-500"
              size="sm"
              icon={Hand}
            />
          </div>
        </div>
        <div className="w-1/4 rounded border">
          <header className="bg-secondary text-center text-primary">
            Hours
          </header>
          <div className="grid grid-rows-3">
            <div
              className="grid border-b p-2"
              style={{ gridTemplateColumns: '2fr 1fr' }}
            >
              <div>Total Hrs Assigned</div>
              <div className="justify-self-center">32</div>
            </div>
            <div
              className="grid border-b p-2"
              style={{ gridTemplateColumns: '2fr 1fr' }}
            >
              <div>Actual Hrs Taken</div>
              <div className="justify-self-center">28</div>
            </div>
            <div
              className="grid p-2"
              style={{ gridTemplateColumns: '2fr 1fr' }}
            >
              <div>Variance</div>
              <div className="justify-self-center">4</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
