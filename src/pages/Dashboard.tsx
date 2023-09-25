import { Box, Container, SimpleGrid } from '@chakra-ui/react';

export const Dashboard = () => {
  return (
    <Container maxW="fit" h="calc(100vh)" bg="#E7E7E8" p="10">
      <SimpleGrid gap={10} minChildWidth={300}>
        <Box bg="red" h="200px" border="1px solid"></Box>
        <Box bg="red" h="200px" border="1px solid"></Box>
        <Box bg="red" h="200px" border="1px solid"></Box>
        <Box bg="red" h="200px" border="1px solid"></Box>

        <Box bg="red" h="200px" border="1px solid"></Box>
        <Box bg="red" h="200px" border="1px solid"></Box>
        <Box bg="red" h="200px" border="1px solid"></Box>
        <Box bg="red" h="200px" border="1px solid"></Box>

        <Box bg="red" h="200px" border="1px solid"></Box>
        <Box bg="red" h="200px" border="1px solid"></Box>
        <Box bg="red" h="200px" border="1px solid"></Box>
        <Box bg="red" h="200px" border="1px solid"></Box>
      </SimpleGrid>
    </Container>
  );
};
