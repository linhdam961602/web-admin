import { Navigate, Outlet } from 'react-router-dom';
import { authSliceName, authReducer } from 'containers/Auth/slices';
import * as authHelper from './helpers';

import { useInjectReducer } from 'store/hooks';
import { SIGN_IN_URI } from 'constants/routes';

const PrivateRoute = () => {
  useInjectReducer({
    key: authSliceName,
    reducer: authReducer,
  });

  const userInfo = authHelper.getAccessToken();

  // const auth = true;
  // console.log('userInfo', userInfo)
  // If authorized, return an outlet that will render child elements
  // If not, return element that will navigate to login page
  // return auth ? <Outlet /> : <Navigate to={SIGN_IN_URI} />;
  return userInfo ? <Outlet /> : <Navigate to={SIGN_IN_URI} />;
};

export default PrivateRoute;
