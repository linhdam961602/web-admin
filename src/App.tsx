import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import CRUDDemoPage from './pages/CRUDDemoPage';
import TableDemoPage from './pages/TableDemoPage';
import LoginPage from './pages/LoginPage';
import DashboardLayout from 'components/Layout/AdminLayout';
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
  TABLE_DEMO_URI,
} from 'constants/routes';

function App() {
  return (
    <Routes>
      <Route path={CRUD_URI} element={<CRUDDemoPage />} />
      <Route path={TABLE_DEMO_URI} element={<TableDemoPage />} />
      {/* Login */}
      <Route path={SIGN_IN_URI} element={<LoginPage />} />
      {/* Dashboard routes */}
      <Route path={HOME_URI} element={<PrivateRoute />}>
        <Route path={HOME_URI} element={<DashboardLayout />}>
          <Route path={PROJECT} element={<>PROJECT</>} />
          <Route path={USER} element={<>USER</>} />
          <Route path={USER_LIST} element={<>USER_LIST</>} />
          <Route path={USER_REQUEST} element={<>USER_REQUEST</>} />
          <Route path={DEVELOPMENT_TOOLS} element={<>DEVELOPMENT_TOOLS</>} />
          <Route path={MEMBERS} element={<>MEMBERS</>} />
        </Route>
      </Route>
      <Route path={NOT_FOUND} element={<Navigate replace to={SIGN_IN_URI} />} />
    </Routes>
  );
}

export default App;
