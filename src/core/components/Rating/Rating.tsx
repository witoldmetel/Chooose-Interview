import { BsStar, BsStarFill, BsStarHalf } from 'react-icons/bs';
import { Box, Icon } from '@chakra-ui/react';

type RatingProps = {
  rating: number;
  numReviews: number;
};

export const Rating = ({ rating, numReviews }: RatingProps) => {
  return (
    <Box display="flex" alignItems="center">
      {Array(5)
        .fill('')
        .map((_, i) => {
          const roundedRating = Math.round(rating * 2) / 2;
          if (roundedRating - i >= 1) {
            return (
              <Icon as={BsStarFill} key={i} style={{ marginLeft: '1' }} color={i < rating ? 'teal.500' : 'gray.300'} />
            );
          }
          if (roundedRating - i === 0.5) {
            return <Icon as={BsStarHalf} key={i} style={{ marginLeft: '1' }} />;
          }
          return <Icon as={BsStar} key={i} style={{ marginLeft: '1' }} />;
        })}
      <Box as="span" ml="2" color="gray.600" fontSize="sm">
        {numReviews} review{numReviews > 1 && 's'}
      </Box>
    </Box>
  );
};
