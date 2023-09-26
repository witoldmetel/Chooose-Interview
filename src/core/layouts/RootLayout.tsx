import { Outlet } from 'react-router-dom';
import { Container } from '@chakra-ui/react';

export default function RootLayout() {
  return (
    <Container maxW="fit" bg="#F6F6F7" p="10">
      <Outlet />
    </Container>
  );
}
