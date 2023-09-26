import Filter from '@/components/ui/filter';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function OngoingActions() {
  return (
    <div className="flex items-center justify-between">
      <div className="w-1/2 grid grid-cols-12 items-end gap-x-2">
        <div className="col-span-4 p-1">
          <Select>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Filter By Dept" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="yard">Yard</SelectItem>
              <SelectItem value="machinery">Machinery</SelectItem>
              <SelectItem value="joinery">Joinery</SelectItem>
              <SelectItem value="carving">Carving</SelectItem>
              <SelectItem value="sanding">Sanding</SelectItem>
              <SelectItem value="polishing">Polishing</SelectItem>
              <SelectItem value="upholstery">Upholstery</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="col-span-4 p-1">
          <Input placeholder="or search by job card" />
        </div>
      </div>
      <Filter
        filterKey="status"
        options={[
          { label: 'All', value: 'all' },
          { label: 'Overdue', value: 'overdue' },
        ]}
      />
    </div>
  );
}
