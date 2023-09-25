import { Button } from '@/components/ui/button';
import Filter from '@/components/ui/filter';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import JobCardForm from './JobCardForm';
import { FILTEROPTIONS } from './constants';

export default function JobCardActions() {
  return (
    <div className="flex items-center justify-between">
      <Sheet>
        <SheetTrigger asChild>
          <Button>New Job Card</Button>
        </SheetTrigger>
        <SheetContent className="md:max-w-lg">
          <SheetHeader>
            <SheetTitle className="text-primary">Create Job Card</SheetTitle>
          </SheetHeader>
          <JobCardForm />
        </SheetContent>
      </Sheet>
      <Filter filterKey="status" options={FILTEROPTIONS} />
    </div>
  );
}
