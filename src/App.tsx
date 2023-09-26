import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { Dashboard } from './pages/Dashboard';

const client = new QueryClient();

const router = createBrowserRouter(createRoutesFromElements(<Route path="/" element={<Dashboard />}></Route>));

function App() {
  return (
    <QueryClientProvider client={client}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
