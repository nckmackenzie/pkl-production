import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { formSchema } from './constants';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Input } from '@/components/ui/input';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { CalendarIcon } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import { format } from 'date-fns';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { SheetClose } from '@/components/ui/sheet';

export default function JobCardForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      jobcardNo: '',
      client: '',
      description: '',
      salesPerson: '',
      startDate: new Date(),
    },
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        className="w-full grid grid-cols-12 gap-x-2 gap-y-4 mt-4"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          name="jobcardNo"
          control={form.control}
          render={({ field }) => (
            <FormItem className="col-span-6">
              <FormLabel>Job Card #</FormLabel>
              <FormControl>
                <Input {...field} type="text" placeholder="12345" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="startDate"
          control={form.control}
          render={({ field }) => (
            <FormItem className="col-span-6">
              <FormLabel>Job Card Date</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      type="button"
                      variant={'outline'}
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
          name="client"
          render={({ field }) => (
            <FormItem className="col-span-6">
              <FormLabel>Client</FormLabel>
              <FormControl>
                <Input {...field} placeholder="Client name..." />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="salesPerson"
          render={({ field }) => (
            <FormItem className="col-span-6">
              <FormLabel>Sales Person</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a sales person" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="eunice">Eunice</SelectItem>
                  <SelectItem value="donna">Donna</SelectItem>
                  <SelectItem value="julie">Julie</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="description"
          control={form.control}
          render={({ field }) => (
            <FormItem className="col-span-12">
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input {...field} placeholder="eg 1 no item name" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Separator className="col-span-12" />
        <p className="col-span-12 text-sm text-center font-semibold text-primary">
          Hours
        </p>
        <FormField
          control={form.control}
          name="yardHrs"
          render={({ field }) => (
            <FormItem className="col-span-4">
              <FormLabel>Yard</FormLabel>
              <FormControl>
                <Input type="number" {...field} placeholder="eg 1 for 1Hrs" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="machineryHrs"
          render={({ field }) => (
            <FormItem className="col-span-4">
              <FormLabel>Machinery</FormLabel>
              <FormControl>
                <Input type="number" {...field} placeholder="eg 1 for 1Hrs" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="joineryHrs"
          render={({ field }) => (
            <FormItem className="col-span-4">
              <FormLabel>Joinery</FormLabel>
              <FormControl>
                <Input type="number" {...field} placeholder="eg 1 for 1Hrs" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="carvingHrs"
          render={({ field }) => (
            <FormItem className="col-span-4">
              <FormLabel>Carving</FormLabel>
              <FormControl>
                <Input type="number" {...field} placeholder="eg 1 for 1Hrs" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="sandingHrs"
          render={({ field }) => (
            <FormItem className="col-span-4">
              <FormLabel>Sanding</FormLabel>
              <FormControl>
                <Input type="number" {...field} placeholder="eg 1 for 1Hrs" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="polishingHrs"
          render={({ field }) => (
            <FormItem className="col-span-4">
              <FormLabel>Polishing</FormLabel>
              <FormControl>
                <Input type="number" {...field} placeholder="eg 1 for 1Hrs" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="upholsteryHrs"
          render={({ field }) => (
            <FormItem className="col-span-4">
              <FormLabel>Upholstery</FormLabel>
              <FormControl>
                <Input type="number" {...field} placeholder="eg 1 for 1Hrs" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="cncHrs"
          render={({ field }) => (
            <FormItem className="col-span-4">
              <FormLabel>CNC</FormLabel>
              <FormControl>
                <Input type="number" {...field} placeholder="eg 1 for 1Hrs" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="finishingHrs"
          render={({ field }) => (
            <FormItem className="col-span-4">
              <FormLabel>Finishing</FormLabel>
              <FormControl>
                <Input type="number" {...field} placeholder="eg 1 for 1Hrs" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" variant="default" className="col-span-4">
          Save
        </Button>
        <SheetClose asChild>
          <Button
            type="reset"
            variant="outline"
            className="col-span-4"
            onClick={() => form.reset()}
          >
            Cancel
          </Button>
        </SheetClose>
      </form>
    </Form>
  );
}
