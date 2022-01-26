import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import CRUDDemoPage from './pages/CRUDDemoPage';
import TableDemoPage from './pages/TableDemoPage';
import LoginPage from './pages/LoginPage';
import DashboardLayout from 'components/Layout/AdminLayout';
import { HOME_URI, SIGN_IN_URI, CRUD_URI, NOT_FOUND } from 'constants/routes';
function App() {
  return (
    <Routes>
      <Route path={CRUD_URI} element={<CRUDDemoPage />} />

      {/* Dashboard routes */}
      <Route path={'/'} element={<DashboardLayout />}>
        <Route path={HOME_URI} element={<TableDemoPage />} />
      </Route>

      {/* Login */}
      <Route path={SIGN_IN_URI} element={<LoginPage />} />
      <Route path={NOT_FOUND} element={<Navigate replace to={SIGN_IN_URI} />} />
    </Routes>
  );
}

export default App;
