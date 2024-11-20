import { Route, Routes } from 'react-router-dom';
import { routes } from './constants';
import Home from './pages/Home';
import Stories from './pages/Stories';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={routes.home} element={<Home />} />
      <Route path={routes.stories} element={<Stories />} />
    </Routes>
  );
};

export default AppRoutes;
