import OngoingActions from './OngoingActions';
import OngoingTable from './OngoingTable';

export default function OngoingsBox() {
  return (
    <div className="space-y-8">
      <OngoingActions />
      <OngoingTable />
    </div>
  );
}
