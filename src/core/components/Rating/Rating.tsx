import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
import { Box, Icon, Text } from '@chakra-ui/react';

type RatingProps = {
  rating: number;
};

export const Rating = ({ rating }: RatingProps) => {
  const stars = Array(5)
    .fill('')
    .map((_, index) => {
      const roundedRating = Math.round(rating * 2) / 2;

      if (roundedRating - index >= 1) {
        return (
          <Icon as={BsStarFill} key={index} style={{ marginLeft: '1' }} color={index < rating ? '#F7D039' : '#fff'} />
        );
      }

      if (roundedRating - index === 0.5) {
        return <Icon as={BsStarHalf} key={index} style={{ marginLeft: '1' }} color="#F7D039" />;
      }

      return <Icon as={BsStar} key={index} style={{ marginLeft: '1' }} color="#F7D039" />;
    });

  return (
    <Box display="flex" alignItems="center">
      {stars}
      <Text ml="2" fontSize="sm" color="#303547" fontWeight="bold">
        {rating}
      </Text>
    </Box>
  );
};
