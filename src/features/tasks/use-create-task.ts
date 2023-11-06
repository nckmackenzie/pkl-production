import { createTask } from '@/services/tasks-api';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export function useCreateTask() {
  const navigate = useNavigate();
  const { isLoading: isCreating, mutate: create } = useMutation({
    mutationFn: createTask,
    onError: (error: Error) => {
      toast.error(error.message);
    },
    onSuccess: () => {
      navigate('/tasks');
    },
  });

  return { isCreating, create };
}
