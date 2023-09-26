import { Box, Divider, HStack, ListItem, SimpleGrid, Text, UnorderedList } from '@chakra-ui/react';

import { convertKilosToTons, getPluralName } from '../../../utils';
import { Trip } from '../../types';

type EmissionBoxProps = Pick<Trip, 'days' | 'co2kilograms' | 'countries'>;

export const EmissionBox = ({ days, co2kilograms, countries }: EmissionBoxProps) => {
  return (
    <Box display="flex" flexDirection="column" bg="#fff" p={4} rounded="lg" border="3px solid #F0F2F2" width="100%">
      <Text fontSize="x-large" fontWeight="bold">
        {getPluralName('day', days)}
      </Text>
      <HStack>
        <Text color="#8F999F" fontSize="sm" fontWeight="bold">
          Emissions:
        </Text>
        <Text color="#8F999F" fontSize="sm" fontWeight="bold">
          {`${convertKilosToTons(co2kilograms)} CO`}
          <sub>2</sub>e
        </Text>
      </HStack>
      <Divider my="4" />
      <Text color="#8F999F" fontSize="sm" fontWeight="bold">
        {`${countries.length > 1 ? 'Countries' : 'County'} included:`}
      </Text>
      <UnorderedList>
        <SimpleGrid columns={2}>
          {countries.map((country) => (
            <ListItem key={country} color="#8F999F" fontSize="sm" fontWeight="semibold">
              {country}
            </ListItem>
          ))}
        </SimpleGrid>
      </UnorderedList>
    </Box>
  );
};
