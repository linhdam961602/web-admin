import React from 'react';
import { Breakpoint, Stack } from '@mui/material';
import { intl } from 'containers/LanguageProvider';
import Typography from 'components/MUIComponent/Typography';
import Dialog from '@mui/material/Dialog';
import Button from 'components/MUIComponent/Button';
import {
  ButtonActionsStyle,
  DialogRootStyle,
  DialogTitleStyle,
} from './styled';
import { ColorSchema } from 'types/Palette';
import { SvgIconComponent } from '@mui/icons-material';

type CommonDialogProps = {
  title?: string;
  titleIcon?: React.ReactElement<SvgIconComponent> | null;
  children: React.ReactElement;
  isOpenDialog: boolean;
  onCloseDialog?: () => void;
  onYes?: (event: any) => void;
  onNo?: (event: any) => void;
  onDiscard?: (event: any) => void;
  cancelText?: string;
  confirmText?: string;
  colorConfirmBtn?: ColorSchema;
  maxWidth?: Breakpoint;
};

const AlertDialog = ({
  title,
  titleIcon,
  isOpenDialog,
  onCloseDialog,
  children,
  onNo,
  onYes,
  cancelText = intl.formatMessage({ id: 'common.button.cancel' }),
  confirmText = intl.formatMessage({ id: 'common.button.ok' }),
  colorConfirmBtn = 'error',
  maxWidth = 'xs',
}: CommonDialogProps) => (
  <Dialog
    open={isOpenDialog}
    onClose={onCloseDialog}
    maxWidth={maxWidth}
    onClick={(e: any) => {
      e.stopPropagation();
    }}
  >
    {(title || titleIcon) && (
      <DialogTitleStyle>
        {titleIcon}
        <Typography variant="h5">{title}</Typography>
      </DialogTitleStyle>
    )}
    <DialogRootStyle>
      {children}
      <ButtonActionsStyle>
        <Stack direction={{ xs: 'row' }} spacing={{ xs: 2 }}>
          {onNo && (
            <Button color="inherit" variant="outlined" onClick={onNo}>
              {cancelText}
            </Button>
          )}
          {onYes && (
            <Button color={colorConfirmBtn} variant="contained" onClick={onYes}>
              {confirmText}
            </Button>
          )}
        </Stack>
      </ButtonActionsStyle>
    </DialogRootStyle>
  </Dialog>
);

export default AlertDialog;
