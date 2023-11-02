import Table from '@/components/ui/table';
import { JOBCARDS } from '../jobcards/constants';
import { Badge } from '@/components/ui/badge';

type PerformanceRowProps = {
  jobcard: string;
  hrsAssigned: number;
  hrsTaken: number;
};

export default function PerformanceRow({
  jobcard,
  hrsAssigned,
  hrsTaken,
}: PerformanceRowProps) {
  const foundJobCard = JOBCARDS.find(job => job.jobcardNo === jobcard);
  const variance = hrsAssigned - hrsTaken;
  return (
    <Table.Row>
      <div>{jobcard}</div>
      <div className="text-sm uppercase">{foundJobCard?.description}</div>
      <div>
        <Badge variant={foundJobCard?.status}>
          {foundJobCard?.status.toUpperCase()}
        </Badge>
      </div>
      <div>{hrsAssigned}</div>
      <div>{hrsTaken}</div>
      <div className={variance > 0 ? 'text-green-500' : 'text-red-500'}>
        {variance}
      </div>
    </Table.Row>
  );
}
