import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { authActions, authSaga, authSliceName } from 'containers/Auth/slices';
import { useInjectSaga } from 'store/hooks';

function AppContainer({ children }: any) {
  useInjectSaga({ key: authSliceName, saga: authSaga });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(authActions.me({ navigate }));
    // eslint-disable-next-line
  }, [dispatch]);

  return children;
}

export default AppContainer;
