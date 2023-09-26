import { useNavigate, useParams } from 'react-router-dom';
import {
  Box,
  Button,
  Center,
  Container,
  Divider,
  Heading,
  Image,
  Spinner,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';

import { AdvantagesBox, EmissionBox, ErrorLabel } from '../core/components';
import { useTrip } from '../core/hooks/useTrip';

export const Trip = () => {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, isError } = useTrip({ tripId: Number(id) });

  if (isError) {
    return <ErrorLabel />;
  }

  return (
    <Container maxW="fit" py="5" px={{ base: '5' }}>
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
          <Stack flexDirection={{ base: 'column', sm: 'row' }} alignItems="flex-start" marginTop="20px" gap="5%">
            {/* FIRST COLUMN */}
            <VStack alignItems="flex-start" w={{ base: '100%', md: '60%', lg: '50%' }}>
              <Box w="100%">
                <Image borderRadius="lg" src={data.photoUrl} alt={data.title} objectFit="contain" w="100%" />
              </Box>
              <Text fontWeight="bold" fontSize="22px" marginTop="5">
                Overview
              </Text>
              <AdvantagesBox advantages={data.advantages} />
              <Divider my={{ base: 3, md: 4 }} borderColor="gray.300" />
              <Text fontSize="18px">{data.description}</Text>
            </VStack>
            {/* SECOND COLUMN */}
            <VStack w={{ base: '100%', md: '40%', lg: '30%' }}>
              <EmissionBox days={data.days} co2kilograms={data.co2kilograms} countries={data.countries} />
            </VStack>
          </Stack>
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
