import Filter from '@/components/ui/filter';
import { FILTEROPTIONS } from './constants';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';

export default function JobCardActions() {
  return (
    <div className="flex items-center justify-between">
      <Link to="new" className={cn(buttonVariants({ variant: 'default' }))}>
        New Job Card
      </Link>

      <Filter
        filterKey="status"
        options={[
          ...FILTEROPTIONS,
          { value: 'unassigned', label: 'Unassigned' },
        ]}
      />
    </div>
  );
}
