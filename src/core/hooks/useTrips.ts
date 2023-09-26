import { useInfiniteQuery } from '@tanstack/react-query';

import { getTrips } from '../queries/getTrips';

export const useTrips = () =>
  useInfiniteQuery({
    queryKey: ['trips'],
    queryFn: ({ pageParam = 1 }) => getTrips(pageParam),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length === 0 ? undefined : allPages.length + 1;
    },
  });
