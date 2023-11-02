import Pagination from '@/components/ui/pagination';
import Table from '@/components/ui/table';
import PerformanceRow from './PerformanceRow';

type PerformanceTableProps = {
  tasks: Task[];
};

export default function PerformanceTable({ tasks }: PerformanceTableProps) {
  return (
    <Table columns="0.5fr 3fr 0.5fr 1fr 1fr 1fr">
      <Table.Header>
        <div>Job Card</div>
        <div>Description</div>
        <div>Status</div>
        <div>Hrs Assigned</div>
        <div>Actual Hrs</div>
        <div>Variance</div>
      </Table.Header>
      <Table.Body
        data={tasks}
        render={task => (
          <PerformanceRow
            key={task.id}
            jobcard={task.jobcardNo}
            hrsAssigned={task.hrsAssigned}
            hrsTaken={task.hrsTaken}
          />
        )}
      />
      <Table.Footer>
        <Pagination count={tasks.length} />
      </Table.Footer>
    </Table>
  );
}
