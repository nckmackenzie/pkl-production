import { getUser } from '@/services/auth-api';
import { useQuery } from '@tanstack/react-query';

export function useUser() {
  const {
    isLoading,
    data: user,
    error,
  } = useQuery({
    queryFn: getUser,
    queryKey: ['user'],
  });

  return {
    isLoading,
    isAuthenticated: user?.role === 'authenticated',
    user,
    error,
  };
}
