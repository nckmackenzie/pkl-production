import Filter from '@/components/ui/filter';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { FILTEROPTIONS } from '../jobcards/constants';
import { useDepartments } from '@/context/departments';
import { useSearchParams } from 'react-router-dom';

export default function TaskAction() {
  const { departments } = useDepartments();
  const [searchParams, setSearchParams] = useSearchParams();

  function handleChange(value: string) {
    if (value && value !== '') {
      searchParams.set('department', value);
    } else {
      searchParams.delete('department');
    }

    setSearchParams(searchParams);
  }

  return (
    <div className="flex items-center justify-between">
      <div className="w-1/2 grid grid-cols-12 items-end gap-x-2">
        <div className="col-span-4 p-1">
          <Select onValueChange={handleChange}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Filter By Dept" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="">All</SelectItem>
              {departments.map(dept => (
                <SelectItem key={dept.id} value={dept.id.toString()}>
                  {dept.name.toUpperCase()}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="col-span-4 p-1">
          <Input placeholder="or search by job card" />
        </div>
      </div>
      <Filter
        filterKey="status"
        options={FILTEROPTIONS.filter(option => option.value !== 'completed')}
      />
    </div>
  );
}
