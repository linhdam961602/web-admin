import React from 'react';
import { DialogTitle, Stack } from '@mui/material';
import Typography from 'components/MUIComponent/Typography';
import Dialog from '@mui/material/Dialog';
import Button from 'components/MUIComponent/Button';
import { ButtonActionsStyle, DialogRootStyle } from './styled';

type CommonDialogProps = {
  title?: string;
  children: React.ReactElement;
  isOpenDialog: boolean;
  onCloseDialog?: () => void;
  onYes?: (event: any) => void;
  onNo?: (event: any) => void;
  onDiscard?: (event: any) => void;
  cancelText?: string;
  confirmText?: string;
  colorConfirmBtn?: string;
};

const AlertDialog = ({
  title,
  isOpenDialog,
  onCloseDialog,
  children,
  onNo,
  onYes,
  cancelText,
  confirmText,
  colorConfirmBtn = 'error',
}: CommonDialogProps) => (
  <Dialog
    open={isOpenDialog}
    onClose={onCloseDialog}
    maxWidth="xs"
    onClick={(e: any) => {
      e.stopPropagation();
    }}
  >
    <DialogTitle>
      <Typography color="primary">{title}</Typography>
    </DialogTitle>
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
