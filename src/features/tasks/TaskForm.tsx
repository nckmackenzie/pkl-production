import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from '@tanstack/react-query';
import { z } from 'zod';
import { format } from 'date-fns';
import MultiSelect, { ActionMeta, MultiValue } from 'react-select';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { cn, createDateTime } from '@/lib/utils';
import { CalendarIcon, Check, ChevronsUpDown } from 'lucide-react';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import StaffForm from '../staff/StaffForm';
import { Calendar } from '@/components/ui/calendar';
import { Input } from '@/components/ui/input';

import { useDepartments } from '@/context/departments';
import { formSchema } from './constants';
import { getStaffByDepartment } from '@/services';
import { useOpenJobcards } from './use-open-jobcards';
import { useCreateTask } from './use-create-task';

type SelectOption = { label: string; value: string };

export default function TaskForm() {
  const [staffs, setStaffs] = useState<Options[]>([]);
  const [selectedStaffs, setSelectedStaffs] = useState<Options[] | null>(null);
  const [selectedDept, setSelectedDept] = useState<string | null>(null);
  const [openJobCard, setOpenJobCard] = useState<boolean>(false);
  const { isLoadingOpenJobs, openJobCards } = useOpenJobcards();
  const { departments } = useDepartments();

  const { isLoading, data } = useQuery({
    queryFn: () => getStaffByDepartment(selectedDept),
    queryKey: ['staff', selectedDept],
  });

  const { isCreating, create } = useCreateTask();

  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      jobcard: '',
      department: '',
      startdate: new Date(),
      starttime: '',
      comments: '',
    },
  });

  useEffect(
    function () {
      if (!data) return;
      const formattedStaffs = data.map(staff => ({
        value: staff.id,
        label: staff.name.toUpperCase(),
      }));
      setStaffs(formattedStaffs);
    },
    [selectedDept, data]
  );

  if (isLoadingOpenJobs) return null;

  const formattedOpenCards = openJobCards?.map(card => ({
    value: card.id,
    label: card.jobcard_no,
  }));

  function handleSelectChange(value: string) {
    form.setValue('department', value);
    setSelectedDept(value);
  }

  const handleMultiSelectChange = (
    newValue: MultiValue<SelectOption>,
    actionMeta: ActionMeta<SelectOption>
  ) => {
    if (actionMeta.action === 'clear') {
      setSelectedStaffs([]);
    } else if (newValue) {
      setSelectedStaffs(newValue.map(option => option as SelectOption));
    }
  };

  function onSubmit(values: z.infer<typeof formSchema>) {
    const taskStaff = selectedStaffs?.map(staff => staff.value);
    const constructedDate = createDateTime(
      format(new Date(values.startdate), 'yyyy-MM-dd'),
      values.starttime
    );
    const formObj = {
      jobcard_id: values.jobcard,
      department_id: values.department,
      started: format(new Date(constructedDate), 'yyyy-MM-dd HH:mm'),
      remarks:
        values?.comments && values.comments?.trim().length > 0
          ? values.comments
          : null,
      staffs: taskStaff,
    };
    // console.log(formObj);
    create(formObj);
  }

  return (
    <div className="m-4 space-y-3">
      <div className="flex items-center justify-between">
        <Dialog>
          <DialogTrigger asChild>
            <Button size="sm">Add Staff</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Create Staff</DialogTitle>
            </DialogHeader>
            {<StaffForm departments={departments} />}
          </DialogContent>
        </Dialog>
      </div>

      <Card className="max-w-xl mx-auto">
        <CardHeader>
          <CardTitle className="block text-center text-xl">
            Create Task
          </CardTitle>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="grid grid-cols-12 gap-x-4 gap-y-6"
            >
              <FormField
                control={form.control}
                name="jobcard"
                render={({ field }) => (
                  <FormItem className="col-span-6">
                    <FormLabel>Job Card</FormLabel>
                    <Popover open={openJobCard} onOpenChange={setOpenJobCard}>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant="outline"
                            role="combobox"
                            className={cn(
                              'w-full justify-between',
                              !field.value && 'text-muted-foreground'
                            )}
                          >
                            {field.value
                              ? formattedOpenCards &&
                                formattedOpenCards.find(
                                  card => card.value === field.value
                                )?.label
                              : 'Select a job card'}
                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-full p-0">
                        <Command>
                          <CommandInput placeholder="Search a job card..." />
                          <CommandEmpty>No jobcards found.</CommandEmpty>
                          <CommandGroup>
                            {formattedOpenCards &&
                              formattedOpenCards.map(card => (
                                <CommandItem
                                  value={card.label}
                                  key={card.value}
                                  disabled={isCreating}
                                  onSelect={() => {
                                    form.setValue('jobcard', card.value);
                                    setOpenJobCard(false);
                                  }}
                                >
                                  <Check
                                    className={cn(
                                      'mr-2 h-4 w-4',
                                      card.value === field.value
                                        ? 'opacity-100'
                                        : 'opacity-0'
                                    )}
                                  />
                                  {card.label}
                                </CommandItem>
                              ))}
                          </CommandGroup>
                        </Command>
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="department"
                render={({ field }) => (
                  <FormItem className="col-span-6">
                    <FormLabel>Department</FormLabel>
                    <Select
                      onValueChange={handleSelectChange}
                      defaultValue={field.value}
                      disabled={isCreating}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select department" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {departments?.map(dept => (
                          <SelectItem key={dept.id} value={dept.id.toString()}>
                            {dept.name.toUpperCase()}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="startdate"
                render={({ field }) => (
                  <FormItem className="col-span-6">
                    <FormLabel>Start Date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={'outline'}
                            disabled={isCreating}
                            className={cn(
                              'w-full pl-3 text-left font-normal',
                              !field.value && 'text-muted-foreground'
                            )}
                          >
                            {field.value ? (
                              format(field.value, 'PPP')
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={date =>
                            date > new Date() || date < new Date('1900-01-01')
                          }
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="starttime"
                render={({ field }) => (
                  <FormItem className="col-span-6">
                    <FormLabel>Start Time</FormLabel>
                    <FormControl>
                      <Input type="time" {...field} disabled={isCreating} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormLabel className="-mb-2">Staff(s)</FormLabel>
              <MultiSelect
                isMulti
                name="staffs"
                className="basic-multi-select col-span-12"
                classNamePrefix="select"
                isDisabled={isLoading || isCreating}
                options={staffs}
                onChange={handleMultiSelectChange}
                styles={{
                  control: baseStyles => ({
                    ...baseStyles,
                    backgroundColor: 'transparent',
                    borderColor: 'border',
                  }),
                }}
              />
              <FormField
                control={form.control}
                name="comments"
                render={({ field }) => (
                  <FormItem className="col-span-full">
                    <FormLabel>Remarks</FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        placeholder="remarks on task here..."
                        {...field}
                        disabled={isCreating}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="col-span-full flex gap-2 ">
                <Button type="submit" className="grow" disabled={isCreating}>
                  Save
                </Button>
                <Button
                  type="reset"
                  variant="outline"
                  className="grow"
                  disabled={isCreating}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </Form>
        </CardHeader>
      </Card>
    </div>
  );
}
