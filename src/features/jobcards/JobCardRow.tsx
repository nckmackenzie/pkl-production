import { Badge } from '@/components/ui/badge';
import Table from '@/components/ui/table';

type JobCardRowProps = {
  jobcard: JobCardResponse;
  // onJobcardChange: (jobcard: JobCard) => void;
};

export default function JobCardRow({ jobcard }: JobCardRowProps) {
  const { client, jobcard_no, subject, cumulative_hours, status } = jobcard;

  return (
    // <Table.Row clickable onClick={() => onJobcardChange(jobcard_no)}>
    //   <div>{jobcard_no}</div>
    //   <div className="uppercase">{client}</div>
    //   <div className="uppercase">{subject}</div>
    //   <div className="font-semibold">{cumulative_hrs}</div>
    //   <div>
    //     <Badge variant={status}>{status.toUpperCase()}</Badge>
    //   </div>
    // </Table.Row>
    <Table.Row>
      <div>{jobcard_no}</div>
      <div className="uppercase">{client}</div>
      <div className="uppercase">{subject}</div>
      <div className="font-semibold">{cumulative_hours}</div>
      <div>
        {/* <Badge variant={status}>{status.toUpperCase()}</Badge> */}
        <Badge variant="default">{status.toUpperCase()}</Badge>
      </div>
    </Table.Row>
  );
}
