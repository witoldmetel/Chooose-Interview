import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

import { getTrips } from './core/queries/getTrips';
import { Dashboard } from './pages/Dashboard';

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<Dashboard />} loader={getTrips}></Route>)
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
