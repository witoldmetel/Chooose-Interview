import { Outlet } from 'react-router-dom';
import { Container } from '@chakra-ui/react';

export default function RootLayout() {
  return (
    <Container maxW="fit" bg="#E7E7E8" p="10">
      <Outlet />
    </Container>
  );
}
