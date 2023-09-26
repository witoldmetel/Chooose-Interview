import { useQuery } from '@tanstack/react-query';

import { getTrip } from '../queries/getTrip';

export const useTrip = ({ tripId }: { tripId: number }) => {
  return useQuery({
    queryKey: ['trips', tripId],
    queryFn: () => getTrip(tripId),
  });
};
