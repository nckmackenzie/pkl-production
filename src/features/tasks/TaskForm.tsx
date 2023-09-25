import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { formSchema } from './constants';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Check, ChevronsUpDown } from 'lucide-react';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from '@/components/ui/command';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { useState } from 'react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const languages = [
  { label: '12345', value: '12345' },
  { label: '12346', value: '12346' },
  { label: '12347', value: '12347' },
  { label: '12348', value: '12348' },
  { label: '12349', value: '12349' },
  { label: '12350', value: '12350' },
  { label: '12351', value: '12351' },
] as const;
export default function TaskForm() {
  const [openJobCard, setOpenJobCard] = useState<boolean>(false);
  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      jobcard: '',
      department: '',
      startdate: new Date(),
      comments: '',
    },
  });

  function onSubmit() {}
  return (
    <Card className="max-w-xl mx-auto">
      <CardHeader>
        <CardTitle className="block text-center text-xl">Create Task</CardTitle>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid grid-cols-12 gap-x-4 gap-y-6"
          >
            <FormField
              control={form.control}
              name="jobcard"
              render={({ field }) => (
                <FormItem className="col-span-6 flex flex-col">
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
                            ? languages.find(
                                language => language.value === field.value
                              )?.label
                            : 'Select a job card'}
                          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-full p-0">
                      <Command>
                        <CommandInput placeholder="Search a job card..." />
                        <CommandEmpty>No framework found.</CommandEmpty>
                        <CommandGroup>
                          {languages.map(language => (
                            <CommandItem
                              value={language.label}
                              key={language.value}
                              onSelect={() => {
                                form.setValue('jobcard', language.value);
                                setOpenJobCard(false);
                              }}
                            >
                              <Check
                                className={cn(
                                  'mr-2 h-4 w-4',
                                  language.value === field.value
                                    ? 'opacity-100'
                                    : 'opacity-0'
                                )}
                              />
                              {language.label}
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
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select department" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="1">Yard</SelectItem>
                      <SelectItem value="2">Machinery</SelectItem>
                      <SelectItem value="3">Joinery</SelectItem>
                      <SelectItem value="4">Carving</SelectItem>
                      <SelectItem value="5">Sanding</SelectItem>
                      <SelectItem value="6">Polishing</SelectItem>
                      <SelectItem value="7">Upholstery</SelectItem>
                      <SelectItem value="8">Finishing</SelectItem>
                      <SelectItem value="9">CNC</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </form>
        </Form>
      </CardHeader>
    </Card>
  );
}
