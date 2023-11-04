import { useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { login as loginApi } from '@/services/auth-api';

export function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  // const [user, setUser] = useLocalStorageState(null, 'pkl-auth-status');

  const { isLoading, mutate: login } = useMutation({
    mutationFn: loginApi,
    onSuccess: data => {
      queryClient.setQueryData(['user'], data.user);
      localStorage.setItem('pkl-auth-status', JSON.stringify(data));
      navigate('/', { replace: true });
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });

  return { login, isLoading };
}
