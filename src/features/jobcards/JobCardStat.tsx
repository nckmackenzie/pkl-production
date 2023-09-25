import { Button } from '@/components/ui/button';
import { cn, formatDateFromDistance, getPercentage } from '@/lib/utils';

import { ChevronLeft } from 'lucide-react';

type JobCardStatProp = {
  jobcard: JobCard;
  onJobcardChange: (value: null) => void;
};
export default function JobCardStat({
  jobcard,
  onJobcardChange,
}: JobCardStatProp) {
  const percentage = getPercentage(
    jobcard?.hoursInProduction,
    jobcard.cumulativeHrs
  );
  return (
    <article className="space-y-4">
      <Button
        variant="ghost"
        size="sm"
        className="hover:text-blue-900 hover:dark:text-blue-500"
        onClick={() => onJobcardChange(null)}
      >
        <ChevronLeft className="w-4 h-4" />
        <span className="text-sm ">&nbsp;Back</span>
      </Button>
      <div className="flex items-center justify-between">
        <div className="border rounded p-4 space-y-4">
          <h2 className="text-center font-semibold">Progress</h2>
          <div
            className={cn(
              'radial-progress ',
              percentage > 100 ? 'text-red-400' : 'text-green-400'
            )}
            style={{
              '--value': percentage,
              '--size': '8rem',
              '--thickness': '4px',
            }}
          >
            {percentage}%
          </div>
        </div>
        <div className="border rounded">
          <div className="font-semibold p-2 border-b grid grid-cols-2 justify-between gap-x-4">
            <span className="text-primary">Cummulative Hrs:</span>{' '}
            <span className="font-normal">{jobcard.cumulativeHrs}</span>
          </div>
          <div className="font-semibold p-2 border-b grid grid-cols-2 justify-between gap-x-4">
            <span className="text-primary">Hrs in Production:</span>{' '}
            <span className="font-normal">{jobcard.hoursInProduction}</span>
          </div>
          <div className="font-semibold p-2 border-b grid grid-cols-2 justify-between gap-x-4">
            <span className="text-primary">Current In:</span>{' '}
            <span className="font-normal capitalize">
              {jobcard.currentDepartment}
            </span>
          </div>
          <div className="font-semibold p-2 border-b grid grid-cols-2 justify-between gap-x-4">
            <span className="text-primary">Sales Person:</span>{' '}
            <span className="font-normal">{jobcard.salesPerson}</span>
          </div>
          <div className="font-semibold p-2 border-b grid grid-cols-2 justify-between gap-x-4">
            <span className="text-primary">Started:</span>{' '}
            <span className="font-normal capitalize">
              {formatDateFromDistance(jobcard.startedOn)}
            </span>
          </div>
        </div>
      </div>
    </article>
  );
}
