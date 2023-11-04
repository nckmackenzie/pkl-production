import { createJobcard } from '@/services/jobcards-api';
import { useMutation } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

export function useCreate() {
  const navigate = useNavigate();

  const { isLoading: isCreating, mutate: create } = useMutation({
    mutationFn: createJobcard,
    onSuccess: () => {
      navigate('/jobcards');
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
  return { isCreating, create };
}
