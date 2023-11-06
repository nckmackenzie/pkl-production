import { Clock } from 'lucide-react';
import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { cn, getPercentage } from '@/lib/utils';
import { useOutsideClick } from '@/hooks/use-click-outside';

import TaskActions from './TaskActions';

type TaskItemProps = {
  jobcardNo: string;
  hrsTaken: number;
  hrsAssigned: number;
  status: JobStatus;
  subject?: string;
  id: string;
  department?: string;
};

export default function TaskItem({
  jobcardNo,
  hrsTaken,
  hrsAssigned,
  status,
  subject,
  id,
  department,
}: TaskItemProps) {
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

  const [open, setIsOpen] = useState<boolean>(false);

  function handleClose() {
    setIsOpen(false);
  }
  const ref = useOutsideClick(handleClose);

  return (
    <>
      <Card
        className="px-4 py-2 cursor-pointer transition-all hover:bg-slate-50 hover:dark:bg-slate-900 flex flex-col"
        onClick={() => setIsOpen(true)}
      >
        <div className="mb-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold text-primary">{jobcardNo}</div>
            <Badge variant={status}>{status.toUpperCase()}</Badge>
          </div>
          <p className="text-xs uppercase font-semibold text-muted-foreground">
            {subject}
          </p>
          <p className="text-[10px] font-medium uppercase text-primary">
            {department}
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
      <Sheet open={open}>
        <SheetContent ref={ref} onClose={handleClose}>
          <SheetHeader>
            <SheetTitle>{jobcardNo}</SheetTitle>
            <SheetDescription>{subject}</SheetDescription>
            <Badge variant={status} className="mt-1 w-max">
              {status.toUpperCase()}
            </Badge>
          </SheetHeader>
          <TaskActions onClose={handleClose} status={status} taskId={id} />
        </SheetContent>
      </Sheet>
    </>
  );
}
