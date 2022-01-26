import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import CRUDDemoPage from './pages/CRUDDemoPage';
import TableDemoPage from './pages/TableDemoPage';
import LoginPage from './pages/LoginPage';
import DashboardLayout from 'components/Layout/AdminLayout';
import Dashboard from './pages/Dashboard';
import PrivateRoute from 'containers/Auth/PrivateRoute';
import {
  HOME_URI,
  SIGN_IN_URI,
  CRUD_URI,
  NOT_FOUND,
  PROJECT,
  DEVELOPMENT_TOOLS,
  MEMBERS,
  USER,
  USER_LIST,
  USER_REQUEST,
} from 'constants/routes';

function App() {
  return (
    <Routes>
      <Route path={CRUD_URI} element={<CRUDDemoPage />} />

      {/* Dashboard routes */}
      <Route path={'/'} element={<DashboardLayout />} />
      <Route path={HOME_URI} element={<TableDemoPage />} />
      <Route path={SIGN_IN_URI} element={<LoginPage />} />
      <Route path={PROJECT} element={<>PROJECT</>} />
      <Route path={USER} element={<>USER</>} />
      <Route path={USER_LIST} element={<>USER_LIST</>} />
      <Route path={USER_REQUEST} element={<>USER_REQUEST</>} />
      <Route path={DEVELOPMENT_TOOLS} element={<>DEVELOPMENT_TOOLS</>} />
      <Route path={MEMBERS} element={<>MEMBERS</>} />
      <Route path={HOME_URI} element={<PrivateRoute />}>
        <Route path={HOME_URI} element={<Dashboard />} />
      </Route>

      {/* Login */}
      <Route path={SIGN_IN_URI} element={<LoginPage />} />
      <Route path={NOT_FOUND} element={<Navigate replace to={SIGN_IN_URI} />} />
    </Routes>
  );
}

export default App;
