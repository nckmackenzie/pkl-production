import { Button } from '@/components/ui/button';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command';

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { DateRange } from 'react-day-picker';
import { cn } from '@/lib/utils';
import { CalendarIcon, Check, ChevronsUpDown } from 'lucide-react';
import { useState } from 'react';
import { EMPLOYEES } from './constants';
import { format } from 'date-fns';
import { Calendar } from '@/components/ui/calendar';

type PerformanceActionsProps = {
  onChangeDisplayComponent: (value: boolean) => void;
};

export default function PerformanceActions({
  onChangeDisplayComponent,
}: PerformanceActionsProps) {
  const [employee, setEmployee] = useState<string | undefined>();
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState<DateRange | undefined>();

  return (
    <div className="grid grid-cols-12 gap-x-4">
      <div className="col-span-4 p-1">
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-full justify-between"
            >
              {employee
                ? EMPLOYEES.find(framework => framework.value === employee)
                    ?.label
                : 'Select employee...'}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-full p-0">
            <Command>
              <CommandInput placeholder="Search employee..." />
              <CommandEmpty>No employee found.</CommandEmpty>
              <CommandGroup>
                {EMPLOYEES.map(framework => (
                  <CommandItem
                    key={framework.value}
                    onSelect={currentValue => {
                      setEmployee(
                        currentValue === employee ? '' : currentValue
                      );
                      setOpen(false);
                    }}
                  >
                    <Check
                      className={cn(
                        'mr-2 h-4 w-4',
                        employee === framework.value
                          ? 'opacity-100'
                          : 'opacity-0'
                      )}
                    />
                    {framework.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
      <div className="col-span-4 p-1">
        <Popover>
          <PopoverTrigger asChild>
            <Button
              id="date"
              variant={'outline'}
              className={cn(
                'w-full justify-start text-left font-normal',
                !date && 'text-muted-foreground'
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date?.from ? (
                date.to ? (
                  <>
                    {format(date.from, 'LLL dd, y')} -{' '}
                    {format(date.to, 'LLL dd, y')}
                  </>
                ) : (
                  format(date.from, 'LLL dd, y')
                )
              ) : (
                <span>Pick a date range</span>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              initialFocus
              mode="range"
              defaultMonth={date?.from}
              selected={date}
              onSelect={setDate}
              numberOfMonths={2}
            />
          </PopoverContent>
        </Popover>
      </div>
      <Button
        className="col-span-2"
        onClick={() => onChangeDisplayComponent(true)}
      >
        Preview
      </Button>
    </div>
  );
}
