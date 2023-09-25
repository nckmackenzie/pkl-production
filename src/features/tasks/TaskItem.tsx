import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { cn, getPercentage } from '@/lib/utils';
import { Clock } from 'lucide-react';
import { JOBCARDS } from '../jobcards/constants';

type TaskItemProps = {
  jobcardNo: string;
  hrsTaken: number;
  hrsAssigned: number;
};

export default function TaskItem({
  jobcardNo,
  hrsTaken,
  hrsAssigned,
}: TaskItemProps) {
  const percentage = getPercentage(hrsTaken, hrsAssigned);
  const jobcard = JOBCARDS.find(card => card.jobcardNo === jobcardNo);
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
    <Card className="px-4 py-2 cursor-pointer transition-all hover:bg-slate-50 hover:dark:bg-slate-900 flex flex-col">
      <div className="mb-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-primary">{jobcardNo}</div>
          <Badge variant={jobcard?.status}>
            {jobcard?.status.toUpperCase()}
          </Badge>
        </div>
        <p className="text-xs uppercase font-semibold text-muted-foreground">
          {jobcard?.description}
        </p>
      </div>
      <div className="mt-auto">
        <div className={colors.text}>
          <p className="text-sm font-semibold text-right">{percentage}%</p>
          <Progress value={percentage} />
        </div>
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
      </div>
    </Card>
  );
}
