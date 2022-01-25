import { forwardRef } from 'react';
import { alpha } from '@mui/material/styles';
import { useTheme, Theme } from '@mui/material';
import MCheckbox, { CheckboxProps } from '@mui/material/Checkbox';

// ----------------------------------------------------------------------

interface MCheckboxProps extends Omit<CheckboxProps, 'color'> {
  color?:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'info'
    | 'success'
    | 'warning'
    | 'error';
}

const Checkbox = forwardRef<HTMLButtonElement, MCheckboxProps>(
  ({ color = 'primary', sx, ...other }, ref) => {
    const theme = useTheme<Theme>();

    if (color === 'default' || color === 'primary' || color === 'secondary') {
      return <MCheckbox ref={ref} color={color} sx={sx} {...other} />;
    }

    return (
      <MCheckbox
        ref={ref}
        sx={{
          '&.Mui-checked': {
            color: theme.palette[color].main,
          },
          '&.MuiCheckbox-indeterminate': {
            color: theme.palette[color].main,
          },
          '&:hover, &.Mui-checked:hover': {
            backgroundColor: alpha(
              theme.palette[color].main,
              theme.palette.action.hoverOpacity,
            ),
          },
          ...sx,
        }}
        {...other}
      />
    );
  },
);

Checkbox.displayName = 'Checkbox';
export default Checkbox;
