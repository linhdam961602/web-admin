import { useEffect } from 'react';
import { shallowEqual } from 'react-redux';
import { useIntl, IntlShape } from 'react-intl';
import transform from 'lodash/transform';
import isString from 'lodash/isString';
import isPlainObject from 'lodash/isPlainObject';

import { useAppDispatch, useAppSelector, useInjectReducer } from 'store/hooks';
import KeyPair from 'types/KeyPair';
import showNotification from 'components/BasicComponents/Notification';

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

export function NotificationContainer() {
  const intl = useIntl();
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

  return null;
}
