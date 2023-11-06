import { getIncompleteTasks } from '@/services/tasks-api';
import { useQuery } from '@tanstack/react-query';
import { useSearchParams } from 'react-router-dom';

export function useGetTasks() {
  const [searchParams] = useSearchParams();
  const status = searchParams.get('status') || 'ongoing';
  const department = searchParams.get('department') || null;

  const { isLoading, data } = useQuery({
    queryFn: () => getIncompleteTasks({ status, department }),
    queryKey: ['tasks', status, department],
  });

  return { isLoading, data };
}
