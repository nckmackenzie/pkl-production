import { getUser } from '@/services/auth-api';
import { useQuery } from '@tanstack/react-query';

export function useUser() {
  const { isLoading, data, error } = useQuery({
    queryFn: getUser,
    queryKey: ['user'],
  });

  return {
    isLoading,
    isAuthenticated: data?.status === 'success',
    user: data?.user,
    status: data?.status,
    error,
  };
}
