import { useLoaderData } from 'react-router-dom';
import { Container, SimpleGrid } from '@chakra-ui/react';

import { Card } from '../core/components';

export const Dashboard = () => {
  // @todo: Add type
  const trips = useLoaderData() as any;
  console.log('file: Dashboard.tsx:6 ~ Dashboard ~ trips:', trips);

  return (
    <Container maxW="fit" h="calc(100vh)" bg="#E7E7E8" p="10">
      <SimpleGrid gap={5} minChildWidth={300}>
        {trips &&
          trips.map((trip) => (
            <Card
              key={trip.id}
              title={trip.title}
              countriesLength={trip.countries?.length}
              days={trip.days}
              co2kilograms={trip.co2kilograms}
              rating={trip.rating}
              bgImage={trip.photoUrl}
            />
          ))}
      </SimpleGrid>
    </Container>
  );
};
