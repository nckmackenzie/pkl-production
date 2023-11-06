import { useState } from 'react';
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';

import { Input } from '@/components/ui/input';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { taskActions } from '@/services/tasks-api';
import toast from 'react-hot-toast';
import { createDateTime } from '@/lib/utils';
import { format } from 'date-fns';

const formSchema = z.object({
  transactionDate: z.string().nonempty('Date is required'),
  transactionTime: z.string().nonempty('Time is required'),
  comment: z.string(),
});

type TaskActionsProps = {
  onClose: () => void;
  status: string;
  taskId: string;
};

export default function TaskActions({
  onClose,
  status,
  taskId,
}: TaskActionsProps) {
  const [showForm, setShowForm] = useState<boolean>(false);
  const [actionType, setActionType] = useState<string | undefined>();
  const queryClient = useQueryClient();
  const { isLoading: isCreating, mutate } = useMutation({
    mutationFn: taskActions,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
      onClose();
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    const button = e.target as HTMLButtonElement;
    setShowForm(true);
    setActionType(button.textContent?.trim().toLowerCase());
  }

  const form = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      transactionDate: '',
      transactionTime: '',
      comment: '',
    },
    resolver: zodResolver(formSchema),
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const constructedDate = createDateTime(
      format(new Date(values.transactionDate), 'yyyy-MM-dd'),
      values.transactionTime
    );
    const formObj = {
      transactionDate: format(new Date(constructedDate), 'yyyy-MM-dd HH:mm'),
      remarks:
        values.comment && values.comment.trim().length > 0
          ? values.comment
          : null,
      actionType: actionType ? actionType : 'unknown',
    };
    mutate({ details: formObj, taskId });
  }

  return (
    <div className="mt-6">
      {!showForm ? (
        <div className="flex items-center gap-2">
          <Button
            type="button"
            className="grow"
            variant="secondary"
            onClick={handleClick}
          >
            {status === 'ongoing' ? 'Pause' : 'Resume'}
          </Button>
          <Button
            type="button"
            className="grow"
            variant="success"
            onClick={handleClick}
          >
            Complete
          </Button>
        </div>
      ) : (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="grid grid-cols-12 gap-2"
          >
            <FormField
              control={form.control}
              name="transactionDate"
              render={({ field }) => (
                <FormItem className="col-span-full">
                  <FormLabel>Date</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} disabled={isCreating} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="transactionTime"
              render={({ field }) => (
                <FormItem className="col-span-full">
                  <FormLabel>Time</FormLabel>
                  <FormControl>
                    <Input type="time" {...field} disabled={isCreating} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="comment"
              render={({ field }) => (
                <FormItem className="col-span-full">
                  <FormLabel>Remarks</FormLabel>
                  <FormControl>
                    <Input {...field} disabled={isCreating} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="col-span-full flex items-center gap-2">
              <Button
                type="submit"
                className="grow capitalize"
                disabled={isCreating}
              >
                {actionType}
              </Button>
              <Button
                type="button"
                className="grow capitalize"
                variant="outline"
                onClick={onClose}
                disabled={isCreating}
              >
                Cancel
              </Button>
            </div>
          </form>
        </Form>
      )}
    </div>
  );
}
