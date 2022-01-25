import { forwardRef } from 'react';
import { alpha } from '@mui/material/styles';
import { Theme, useTheme } from '@mui/material';
import MSwitch, { SwitchProps } from '@mui/material/Switch';

// ----------------------------------------------------------------------

interface MSwitchProps extends Omit<SwitchProps, 'color'> {
  color?:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'info'
    | 'success'
    | 'warning'
    | 'error';
}

const Switch = forwardRef<HTMLSpanElement, MSwitchProps>(
  ({ color = 'primary', sx, ...other }) => {
    const theme = useTheme<Theme>();

    if (color === 'default' || color === 'primary' || color === 'secondary') {
      return <MSwitch color={color} sx={sx} {...other} />;
    }

    return (
      <MSwitch
        sx={{
          '&.Mui-checked': {
            color: theme.palette[color].main,
            '&:hover': {
              bgcolor: alpha(
                theme.palette[color].main,
                theme.palette.action.hoverOpacity,
              ),
            },
          },
          '&.Mui-checked + .MuiSwitch-track': {
            bgcolor: theme.palette[color].main,
          },
          ...sx,
        }}
        {...other}
      />
    );
  },
);

Switch.displayName = 'Switch';
export default Switch;
