import { forwardRef } from 'react';
// material
import { alpha } from '@mui/material/styles';
import { Theme, useTheme } from '@mui/material';
import MIconButton, { IconButtonProps } from '@mui/material/IconButton';
// ----------------------------------------------------------------------

interface MIconButtonProps extends Omit<IconButtonProps, 'color'> {
  color?:
    | 'inherit'
    | 'default'
    | 'primary'
    | 'secondary'
    | 'info'
    | 'success'
    | 'warning'
    | 'error';
  buttonClassName?: string;
}

const IconButton = forwardRef<HTMLButtonElement, MIconButtonProps>(
  ({ color = 'default', children, sx, ...other }, ref) => {
    const theme = useTheme<Theme>();

    if (
      color === 'default' ||
      color === 'inherit' ||
      color === 'primary' ||
      color === 'secondary'
    ) {
      return (
        <MIconButton ref={ref} color={color} sx={sx} {...other}>
          {children}
        </MIconButton>
      );
    }

    return (
      <MIconButton
        ref={ref}
        sx={{
          color: theme.palette[color].main,
          '&:hover': {
            bgcolor: alpha(
              theme.palette[color].main,
              theme.palette.action.hoverOpacity,
            ),
          },
          ...sx,
        }}
        {...other}
      >
        {children}
      </MIconButton>
    );
  },
);

IconButton.displayName = 'IconButton';
export default IconButton;
