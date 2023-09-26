import { AlarmClock, Repeat2 } from 'lucide-react';
import CardStat from './CardStat';
import { ONGOINGTASKSBYDEPT } from './constants';
import SummaryTable from './SummaryTable';

export default function DashboardBox() {
  const noOfJobs = ONGOINGTASKSBYDEPT.reduce(
    (acc, cur) => acc + cur.noOfOngoings,
    0
  );
  const noOfOverDueJobs = ONGOINGTASKSBYDEPT.reduce(
    (acc, cur) => acc + cur.noOfOverdue,
    0
  );
  return (
    <div className="flex gap-6">
      <div className="flex-1">
        <div className="grid grid-cols-12 gap-6">
          <CardStat
            className="col-span-6"
            title="No of ongoing tasks"
            value={noOfJobs}
            icon={Repeat2}
            bgColor="bg-green-500/10"
            textColor="text-green-500"
          />
          <CardStat
            className="col-span-6"
            title="No of overdue jobs"
            value={noOfOverDueJobs}
            bgColor="bg-red-500/10"
            textColor="text-red-500"
            icon={AlarmClock}
          />
          <div className="col-span-12">
            <SummaryTable />
          </div>
        </div>
      </div>
      <div className="w-fit rounded border">
        <header className="bg-secondary text-center px-8 py-4 font-semibold text-primary">
          Cummulative Hrs By Department
        </header>
      </div>
    </div>
  );
}
