import { forwardRef } from 'react';
import { alpha } from '@mui/material/styles';
import { useTheme, Theme } from '@mui/material';
import MRadio, { RadioProps } from '@mui/material/Radio';

// ----------------------------------------------------------------------

interface MRadioProps extends Omit<RadioProps, 'color'> {
  color?:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'info'
    | 'success'
    | 'warning'
    | 'error';
}

const Radio = forwardRef<HTMLSpanElement, MRadioProps>(
  ({ color = 'primary', sx, ...other }) => {
    const theme = useTheme<Theme>();

    if (color === 'default' || color === 'primary' || color === 'secondary') {
      return <MRadio color={color} sx={sx} {...other} />;
    }

    return (
      <MRadio
        sx={{
          '&.Mui-checked': {
            color: theme.palette[color].main,
          },
          '&:hover, &.Mui-checked:hover': {
            bgcolor: alpha(
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
Radio.displayName = 'Radio';
export default Radio;
