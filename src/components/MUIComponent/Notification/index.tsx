import { toast } from 'material-react-toastify';
import { Icon, IconifyIcon } from '@iconify/react';
import checkmarkCircle2Fill from '@iconify/icons-eva/checkmark-circle-2-fill';
import infoFill from '@iconify/icons-eva/info-fill';
import alertTriangleFill from '@iconify/icons-eva/alert-triangle-fill';
import alertCircleFill from '@iconify/icons-eva/alert-circle-fill';
import { useTheme } from '@mui/material';
import { Theme } from '@mui/material/styles';

import {
  StyledSnackbarText,
  StyledSnackbarIcon,
  StyledToastContent,
} from './styled';
import KeyPair from 'types/KeyPair';
import { ColorSchema } from 'types/Palette';

export const SUCCESS_TYPE = 'success';
export const INFO_TYPE = 'info';
export const WARNING_TYPE = 'warning';
export const ERROR_TYPE = 'error';

type SnackbarIconProps = {
  icon: KeyPair & IconifyIcon;
  color: ColorSchema;
};

function SnackbarIcon({ icon, color }: SnackbarIconProps) {
  const theme = useTheme<Theme>();
  return (
    <StyledSnackbarIcon styleProps={{ color }} component="span" theme={theme}>
      <Icon icon={icon} width={20} height={20} />
    </StyledSnackbarIcon>
  );
}

type NotificationProps = {
  type: 'success' | 'info' | 'warning' | 'error';
  message: string;
  onClose?: () => void;
};

export function showNotification({
  type,
  message,
  onClose,
}: NotificationProps) {
  const renderToast = (message: string, type: ColorSchema, icon?: any) => {
    const contentToast = (
      <StyledToastContent>
        <SnackbarIcon icon={icon} color={type} />
        <StyledSnackbarText>{message}</StyledSnackbarText>
      </StyledToastContent>
    );
    toast(contentToast, { position: 'top-right', onClose });
  };

  const notificationObj = {
    success: () => renderToast(message, SUCCESS_TYPE, checkmarkCircle2Fill),
    error: () => renderToast(message, ERROR_TYPE, alertCircleFill),
    warning: () => renderToast(message, WARNING_TYPE, alertTriangleFill),
    info: () => renderToast(message, INFO_TYPE, infoFill),
  };

  return notificationObj[type]();
}

export default showNotification;
