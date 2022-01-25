import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
// import CRUDDemoPage from './pages/CRUDDemoPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import PrivateRoute from 'containers/Auth/PrivateRoute';
import {
  HOME_URI,
  SIGN_IN_URI,
  // CRUD_URI,
  NOT_FOUND,
} from 'constants/routes';
const Home = () => <>Home page</>;
function App() {
  return (
    <Routes>
      <Route path={HOME_URI} element={<HomePage />} />
      <Route path={SIGN_IN_URI} element={<LoginPage />} />
      <Route path={HOME_URI} element={<PrivateRoute />}>
        <Route path={HOME_URI} element={<Home />} />
      </Route>
      <Route path={NOT_FOUND} element={<Navigate replace to={SIGN_IN_URI} />} />
    </Routes>
  );
}

export default App;
