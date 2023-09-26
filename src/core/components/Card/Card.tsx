import { Box, Button, Card as ChakraCard, CardBody, Center, Flex, Spacer, Text } from '@chakra-ui/react';

import { convertKilosToTons, getPluralName } from '../../../utils';
import { Rating } from '../Rating/Rating';

type CardProps = {
  title: string;
  countriesLength: number;
  days: number;
  co2kilograms: number;
  rating: number;
  bgImage: string;
};

export const Card = ({ title, countriesLength, days, rating, co2kilograms, bgImage }: CardProps) => {
  return (
    <Box p={3} bg="#fff" rounded="xl">
      <ChakraCard bgImage={bgImage} bgSize="cover" bgPosition="50%" boxShadow="none" h="100%">
        <CardBody w="100%" h="100%" p={0}>
          <Flex alignItems="center" flexDirection="column" w="100%" h="100%">
            <Flex flexDirection="column" h="100%" minW="60%" lineHeight="1.6">
              <Text
                fontSize="28px"
                color="#fff"
                fontWeight="bold"
                align="center"
                mt={22}
                lineHeight="28px"
                // @todo: Sometimes title and subtitle are not properly visible, they are too light. We need more tests with mixBlendMode to adjust proper colors
                // mixBlendMode="difference"
                // filter={`drop-shadow(0.05em 0.05em #000)`}
              >
                {title}
              </Text>
              <Spacer />
              <Text fontSize="sm" color="#fff" fontWeight="normal" align="center">
                {`${getPluralName('country', countriesLength)}, ${getPluralName('day', days)} `}
              </Text>
              <Spacer />
              <Center>
                <Button
                  p="10px"
                  variant="hover"
                  bg="#4066BD"
                  w="fit-content"
                  mt={6}
                  _hover={{
                    bg: 'blue.700',
                  }}
                  _focus={{
                    bg: 'blue.700',
                  }}
                >
                  <Text fontSize="sm" color="#fff" fontWeight="semibold" cursor="pointer">
                    Learn more
                  </Text>
                </Button>
              </Center>
              <Spacer my={4} />
            </Flex>
            <Box width="80%" bg="#151A2E" px={2} py={3} rounded="xl" mb={2}>
              <Flex justifyContent="space-between" alignItems="center" gap="2">
                <Text fontSize="sm" color="#fff" fontWeight="semibold">
                  Emissions offset:
                </Text>
                <Text fontSize="sm" color="#fff" fontWeight="bold">
                  {`${convertKilosToTons(co2kilograms)} CO`}
                  <sub>2</sub>e
                </Text>
              </Flex>
            </Box>
            <Box width="80%" bg="#fff" px={2} py={3} roundedTop="xl">
              <Flex justifyContent="space-between" alignItems="center" gap="2">
                <Text fontSize="sm" color="#303547" fontWeight="semibold">
                  Trip rating
                </Text>
                <Rating rating={rating} />
              </Flex>
            </Box>
          </Flex>
        </CardBody>
      </ChakraCard>
    </Box>
  );
};
