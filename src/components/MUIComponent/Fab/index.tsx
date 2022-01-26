import { forwardRef } from 'react';
// material
import { useTheme, Theme } from '@mui/material';
import MFab, { FabProps } from '@mui/material/Fab';

// ----------------------------------------------------------------------

interface MFabProps extends Omit<FabProps, 'color'> {
  color?:
    | 'inherit'
    | 'default'
    | 'primary'
    | 'secondary'
    | 'info'
    | 'success'
    | 'warning'
    | 'error';
}

const Fab = forwardRef<HTMLButtonElement, MFabProps>(
  ({ color = 'primary', children, sx, ...other }, ref) => {
    const theme = useTheme<Theme>();

    if (
      color === 'default' ||
      color === 'inherit' ||
      color === 'primary' ||
      color === 'secondary'
    ) {
      return (
        <MFab ref={ref} color={color} sx={sx} {...other}>
          {children}
        </MFab>
      );
    }

    return (
      <MFab
        ref={ref}
        sx={{
          boxShadow: theme.customShadows[color],
          color: theme.palette[color].contrastText,
          bgcolor: theme.palette[color].main,
          '&:hover': {
            bgcolor: theme.palette[color].dark,
          },
          ...sx,
        }}
        {...other}
      >
        {children}
      </MFab>
    );
  },
);

Fab.displayName = 'Fab';
export default Fab;
