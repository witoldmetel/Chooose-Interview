import { useNavigate, useParams } from 'react-router-dom';
import {
  Box,
  Button,
  Center,
  Container,
  Divider,
  Heading,
  HStack,
  Image,
  ListItem,
  SimpleGrid,
  Spinner,
  Text,
  UnorderedList,
  VStack,
} from '@chakra-ui/react';

import { useTrip } from '../core/hooks/useTrip';
import { convertKilosToTons, getPluralName } from '../utils';

export const Trip = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const { data, isLoading } = useTrip({ tripId: Number(id) });

  return (
    <Container maxW="fit-content" h="100vh">
      <Button
        onClick={() => navigate(-1)}
        color="#8F999F"
        fontWeight="bold"
        fontSize="14px"
        mb="40px"
        variant="link"
        textDecoration="underline"
      >
        Go back
      </Button>

      {data && !isLoading ? (
        <>
          <Heading as="h1">{data.title}</Heading>
          <Text color="#8F999F" fontWeight="semibold" fontSize="16px">
            {data.subtitle}
          </Text>
          <HStack alignItems="flex-start" marginTop="20px" gap="50px">
            {/* FIRST COLUMN */}
            <VStack alignItems="flex-start" w="70%">
              <Box textDecoration="none" _hover={{ textDecoration: 'none' }} w="100%">
                <Image borderRadius="lg" src={data.photoUrl} alt="some good alt text" objectFit="contain" w="100%" />
              </Box>
              <Text fontWeight="bold" fontSize="22px" marginTop="5">
                Overview
              </Text>
              <Divider my="4" />
              <Text fontSize="18px" marginTop="5">
                {data.description}
              </Text>
            </VStack>
            {/* SECOND COLUMN */}
            <VStack w="30%">
              <Box
                display="flex"
                flexDirection="column"
                bg="#fff"
                p={4}
                rounded="lg"
                border="3px solid #F0F2F2"
                width="100%"
              >
                <Text fontSize="x-large" fontWeight="bold">
                  {getPluralName('day', data.days)}
                </Text>
                <HStack>
                  <Text color="#8F999F" fontSize="sm" fontWeight="bold">
                    Emissions:
                  </Text>
                  <Text color="#8F999F" fontSize="sm" fontWeight="bold">
                    {`${convertKilosToTons(data.co2kilograms)} CO`}
                    <sub>2</sub>e
                  </Text>
                </HStack>
                <Divider my="4" />
                <Text color="#8F999F" fontSize="sm" fontWeight="bold">
                  {`${data.countries.length > 1 ? 'Countries' : 'County'} included:`}
                </Text>
                <UnorderedList>
                  <SimpleGrid columns={2}>
                    {data.countries.map((country) => (
                      <ListItem key={country} color="#8F999F" fontSize="sm" fontWeight="semibold">
                        {country}
                      </ListItem>
                    ))}
                  </SimpleGrid>
                </UnorderedList>
              </Box>
            </VStack>
          </HStack>
        </>
      ) : (
        /**
         * LOADER
         */
        <Center my={4}>
          <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="blue.500" size="xl" />
        </Center>
      )}
    </Container>
  );
};
