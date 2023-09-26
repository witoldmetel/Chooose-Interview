import { IconType } from 'react-icons';
import { GoBriefcase } from 'react-icons/go';
import { GrGroup } from 'react-icons/gr';
import { IoEarthOutline } from 'react-icons/io5';
import { RiFlag2Line } from 'react-icons/ri';
import { HStack, Icon, SimpleGrid, Text, VStack } from '@chakra-ui/react';

import { Trip } from '../../types';

type AdvantagesBoxProps = Pick<Trip, 'advantages'>;

export const AdvantagesBox = ({ advantages }: AdvantagesBoxProps) => {
  const advantagesIcons: IconType[] = [RiFlag2Line, IoEarthOutline, GoBriefcase, GrGroup];

  return (
    <SimpleGrid columns={2}>
      {advantages.map((advantage, index) => (
        <HStack key={advantage.title} alignItems="flex-start" my={6}>
          <Icon as={advantagesIcons[index]} fontSize={32} />
          <VStack alignItems="flex-start" mx="8px">
            <Text fontWeight="bold" fontSize="20px">
              {advantage.title}
            </Text>
            <Text color="#8F999F" fontWeight="semibold" fontSize="16px" marginTop="2px">
              {advantage.description}
            </Text>
          </VStack>
        </HStack>
      ))}
    </SimpleGrid>
  );
};
