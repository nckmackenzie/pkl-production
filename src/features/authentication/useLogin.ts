import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { login as loginApi } from '@/services/auth-api';

export function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { isLoading, mutate: login } = useMutation({
    mutationFn: loginApi,
    onSuccess: data => {
      queryClient.setQueryData(['user'], data);
      localStorage.setItem('user', JSON.stringify(data));
      navigate('/', { replace: true });
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });

  return { login, isLoading };
}
