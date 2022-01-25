import notification, { ArgsProps } from 'antd/es/notification';
import 'antd/es/notification/style/css';
import { intl } from 'containers/LanguageProvider';

export const SUCCESS_TYPE = 'success';
export const INFO_TYPE = 'info';
export const WARNING_TYPE = 'warning';
export const ERROR_TYPE = 'error';

interface IProps extends ArgsProps {
  type: 'success' | 'info' | 'warning' | 'error';
}

export function showNotification({
  type,
  message: description,
  top = 70,
  ...options
}: IProps) {
  notification[type]({
    message: intl.formatMessage({
      id: `notification.messageTitle.${type}`,
    }),
    description,
    ...options,
    duration: 3,
    top,
  });
}

export default showNotification;
