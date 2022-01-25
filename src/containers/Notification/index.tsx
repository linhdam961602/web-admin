import 'material-react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import { shallowEqual } from 'react-redux';
import { ToastContainer } from 'material-react-toastify';
import { useIntl, IntlShape } from 'react-intl';
import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material/styles';

import transform from 'lodash/transform';
import isString from 'lodash/isString';
import isPlainObject from 'lodash/isPlainObject';

import showNotification from 'components/MUIComponent/Notification';
import { useAppDispatch, useAppSelector, useInjectReducer } from 'store/hooks';
import KeyPair from 'types/KeyPair';

import { sliceName, selectors, reducer, reducerActions } from './slices';

// Translate message keys in params object
// Ex { name: "company.info.name" } => { name: "Company info" }
const formatParamsMessage = (params: KeyPair, intl: IntlShape) => {
  if (!isPlainObject(params)) return {};

  return transform(params, (result: KeyPair, value: string, pKey: string) => {
    result[pKey] = intl.formatMessage({ id: value });
    return result;
  });
};

const formatMessage = (message: any, intl: IntlShape) => {
  let pFormatMessage: string[] | string = '';
  // Translate an array of message keys
  if (Array.isArray(message)) {
    pFormatMessage = message.map(
      (msgId) =>
        `${intl.formatMessage({
          id: msgId,
          defaultMessage: '메시지를 찾을 수 없습니다.',
        })}\n`,
    );
  }
  // Translate an message object with its param
  else if (isPlainObject(message) && isString(message.id)) {
    return intl.formatMessage(
      { id: message.id, defaultMessage: '메시지를 찾을 수 없습니다.' },
      formatParamsMessage(message.params, intl),
    );
  }
  // Translate a normal message key
  else if (isString(message)) {
    pFormatMessage = message;
  }
  return pFormatMessage;
};

const useStyles = makeStyles((theme: Theme) => ({
  container: {
    '& .Toastify__toast-container--top-right': {
      [theme.breakpoints.down('sm')]: {
        width: theme.typography.pxToRem(250),
        marginLeft: theme.typography.pxToRem(100),
        top: theme.typography.pxToRem(15),
      },
      [theme.breakpoints.up('md')]: {
        width: theme.typography.pxToRem(300),
      },
    },
  },
}));

export function NotificationContainer() {
  const intl = useIntl();
  const classes = useStyles();

  useInjectReducer({
    key: sliceName,
    reducer,
  });

  const dispatch = useAppDispatch();

  const currentNotification = useAppSelector(
    selectors.notificationSelected,
    shallowEqual,
  );
  useEffect(() => {
    if (
      currentNotification &&
      currentNotification.type &&
      currentNotification.message
    ) {
      showNotification({
        ...currentNotification,
        message: formatMessage(currentNotification.message, intl),
        onClose: () => {
          dispatch(reducerActions.removeNotification());
        },
      });
    }
  });

  return (
    <div className={classes.container}>
      <ToastContainer />
    </div>
  );
}
