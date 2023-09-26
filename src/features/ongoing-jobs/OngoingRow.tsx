import Table from '@/components/ui/table';
import { JOBCARDS } from '../jobcards/constants';
import { Progress } from '@/components/ui/progress';
import { cn, getPercentage } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Clock } from 'lucide-react';

type OngoingRowProps = {
  jobcard: string;
  hrsTaken: number;
  hrsAssigned: number;
  staffs: string[];
};

export default function OngoingRow({
  jobcard,
  hrsAssigned,
  hrsTaken,
  staffs,
}: OngoingRowProps) {
  const foundJobCard = JOBCARDS.find(card => card.jobcardNo === jobcard);
  const percentage = getPercentage(hrsTaken, hrsAssigned);
  const remaining = hrsAssigned - hrsTaken;
  const colors = { text: '', bg: '' };
  if (percentage <= 50) {
    colors.text = 'text-green-900 dark:text-green-500';
    colors.bg = 'bg-green-900/10 dark:bg-green-500/10';
  } else if (percentage > 50 && percentage <= 75) {
    colors.text = 'text-amber-900 dark:text-amber-500';
    colors.bg = 'bg-amber-900/10 dark:bg-amber-500/10';
  } else if (percentage > 75 && percentage <= 99) {
    colors.text = 'text-pink-900 dark:text-pink-500';
    colors.bg = 'bg-pink-900/10 dark:bg-pink-500/10';
  } else if (percentage >= 100) {
    colors.text = 'text-red-900 dark:text-red-500';
    colors.bg = 'bg-red-900/10 dark:bg-red-500/10';
  }
  return (
    <Table.Row>
      <div>{jobcard}</div>
      <div className="uppercase">{foundJobCard?.description}</div>
      <div className="flex flex-col">
        <span>{foundJobCard?.currentDepartment?.toUpperCase()}</span>
        <div className="flex gap-0.5">
          {staffs.map(staff => (
            <Badge variant="default" className="w-fit capitalize" key={staff}>
              {staff}
            </Badge>
          ))}
        </div>
      </div>
      <div>{hrsAssigned}</div>
      <div>{hrsTaken}</div>
      <div>
        <div className="text-xs flex items-center justify-between">
          <TimeLeft remaining={remaining} colors={colors} />
        </div>
        <Progress value={percentage} />
      </div>
    </Table.Row>
  );
}

type TimeLeftProps = {
  remaining: number;
  colors: {
    text: string;
    bg: string;
  };
};

function TimeLeft({ remaining, colors }: TimeLeftProps) {
  return (
    <div
      className={cn(
        'text-xs flex gap-1 font-semibold items-center mt-2 p-1 rounded  w-fit',
        `${colors.text} ${colors.bg}`
      )}
    >
      <Clock className="w-4 h-4" />{' '}
      <span>
        {remaining > 0
          ? `${remaining} hrs left`
          : `Overdue by ${Math.abs(remaining)} hrs`}
      </span>
    </div>
  );
}
