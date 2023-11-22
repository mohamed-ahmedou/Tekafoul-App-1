


import { useRoutes } from 'react-router-dom';
import { Routes } from './routes/Public';

const Router = () => {
  const allRoutes = Routes;
  const routes = useRoutes([...allRoutes])
  return routes
}

export default Router
