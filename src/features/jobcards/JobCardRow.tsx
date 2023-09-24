import { Badge } from '@/components/ui/badge';
import Table from '@/components/ui/table';

type JobCardRowProps = {
  jobcard: JobCard;
  onJobcardChange: (jobcard: JobCard) => void;
};

export default function JobCardRow({
  jobcard,
  onJobcardChange,
}: JobCardRowProps) {
  const { jobcardNo, client, description, cumulativeHrs, status } = jobcard;
  return (
    <Table.Row clickable onClick={() => onJobcardChange(jobcard)}>
      <div>{jobcardNo}</div>
      <div className="uppercase">{client}</div>
      <div className="uppercase">{description}</div>
      <div className="font-semibold">{cumulativeHrs}</div>
      <div>
        <Badge variant={status}>{status.toUpperCase()}</Badge>
      </div>
    </Table.Row>
  );
}
