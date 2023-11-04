import Table from '@/components/ui/table';
import SummaryRow from './SummaryRow';
import { ONGOINGTASKSBYDEPT } from './constants';

export default function SummaryTable() {
  return (
    <Table columns="1fr 2fr 1fr 1fr">
      <Table.Header>
        <div>Department</div>
        <div>No Of Ongoing Tasks</div>
        <div>Overdue Jobs</div>
        <div>% Overdue</div>
      </Table.Header>
      {/* <Table.Body
        // data={ONGOINGTASKSBYDEPT}
        // render={column => (
        //   <SummaryRow
        //     key={column.department}
        //     department={column.department}
        //     noOfOngoings={column.noOfOngoings}
        //     noOfOverdue={column.noOfOverdue}
        //   />
        // )}
      /> */}
    </Table>
  );
}
