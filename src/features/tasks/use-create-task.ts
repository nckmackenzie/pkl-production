import { createTask } from '@/services/jobcards-api';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';

export function useCreateTask() {
  const { isLoading: isCreating, mutate: create } = useMutation({
    mutationFn: createTask,
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });

  return { isCreating, create };
}
