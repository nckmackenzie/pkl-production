import Table from '@/components/ui/table';
import { getPercentage } from '@/lib/utils';

type SummaryRowProps = {
  department: string;
  noOfOngoings: number;
  noOfOverdue: number;
};

export default function SummaryRow({
  department,
  noOfOngoings,
  noOfOverdue,
}: SummaryRowProps) {
  return (
    <Table.Row>
      <div>{department}</div>
      <div>{noOfOngoings}</div>
      <div>{noOfOverdue}</div>
      <div>{getPercentage(noOfOverdue, noOfOngoings)}%</div>
    </Table.Row>
  );
}
