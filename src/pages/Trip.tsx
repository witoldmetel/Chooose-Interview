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
  Spinner,
  Text,
  VStack,
} from '@chakra-ui/react';

import { AdvantagesBox, EmissionBox } from '../core/components';
import { useTrip } from '../core/hooks/useTrip';

export const Trip = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { data, isLoading } = useTrip({ tripId: Number(id) });

  return (
    <Container maxW="fit-content">
      <Button
        color="#8F999F"
        fontWeight="bold"
        fontSize="14px"
        mb="40px"
        variant="link"
        textDecoration="underline"
        onClick={() => navigate(-1)}
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
                <Image borderRadius="lg" src={data.photoUrl} alt={data.title} objectFit="contain" w="100%" />
              </Box>
              <Text fontWeight="bold" fontSize="22px" marginTop="5">
                Overview
              </Text>
              <AdvantagesBox advantages={data.advantages} />
              <Divider my="4" borderColor="gray.300" />
              <Text fontSize="18px" marginTop="5">
                {data.description}
              </Text>
            </VStack>
            {/* SECOND COLUMN */}
            <VStack w="30%">
              <EmissionBox days={data.days} co2kilograms={data.co2kilograms} countries={data.countries} />
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
