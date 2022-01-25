import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
// import CRUDDemoPage from './pages/CRUDDemoPage';
import LoginPage from './pages/LoginPage';
// import TableDemo from './pages/TableDemoPage';
import Dashboard from './pages/Dashboard';
import PrivateRoute from 'containers/Auth/PrivateRoute';
import {
  DASHBOARD_URI,
  SIGN_IN_URI,
  // CRUD_URI,
  NOT_FOUND,
} from 'constants/routes';

function App() {
  return (
    <Routes>
      <Route path={DASHBOARD_URI} element={<Dashboard />} />
      <Route path={SIGN_IN_URI} element={<LoginPage />} />
      <Route path={DASHBOARD_URI} element={<PrivateRoute />}>
        <Route path={DASHBOARD_URI} element={<Dashboard />} />
      </Route>
      <Route path={NOT_FOUND} element={<Navigate replace to={SIGN_IN_URI} />} />
    </Routes>
  );
}

export default App;
