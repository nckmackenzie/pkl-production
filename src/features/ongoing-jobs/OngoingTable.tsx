import Table from '@/components/ui/table';
import { TASKS } from '../jobcards/constants';
import OngoingRow from './OngoingRow';
import Pagination from '@/components/ui/pagination';

export default function OngoingTable() {
  return (
    <Table columns="1fr 2fr 2fr 1fr 1fr 1fr">
      <Table.Header>
        <div>Job Card</div>
        <div>Description</div>
        <div>Department</div>
        <div>Assigned Hrs</div>
        <div>Hrs Taken</div>
        <div>%Completion</div>
      </Table.Header>
      <Table.Body
        data={TASKS}
        render={task => (
          <OngoingRow
            key={task.id}
            jobcard={task.jobcardNo}
            hrsAssigned={task.hrsAssigned}
            hrsTaken={task.hrsTaken}
            staffs={task.staffs || []}
          />
        )}
      />
      <Table.Footer>
        <Pagination count={TASKS.length} />
      </Table.Footer>
    </Table>
  );
}
