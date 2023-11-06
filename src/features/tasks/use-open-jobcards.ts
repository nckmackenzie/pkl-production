import { getOpenJobCards } from '@/services/jobcards-api';
import { useQuery } from '@tanstack/react-query';

export function useOpenJobcards() {
  const { isLoading: isLoadingOpenJobs, data: openJobCards } = useQuery({
    queryFn: getOpenJobCards,
    queryKey: ['jobcards', 'open'],
  });

  return { isLoadingOpenJobs, openJobCards };
}
