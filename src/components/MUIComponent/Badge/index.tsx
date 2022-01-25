import { forwardRef } from 'react';
import { useTheme, Theme } from '@mui/material';
import MBadge, { BadgeProps } from '@mui/material/Badge';

// ----------------------------------------------------------------------

declare module '@mui/material' {
  interface BadgePropsColorOverrides {
    info: true;
    success: true;
    warning: true;
  }
}

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ color = 'default', children, sx, ...other }, ref) => {
    const theme = useTheme<Theme>();

    if (
      color === 'default' ||
      color === 'error' ||
      color === 'primary' ||
      color === 'secondary'
    ) {
      return (
        <MBadge ref={ref} color={color} sx={sx} {...other}>
          {children}
        </MBadge>
      );
    }

    return (
      <MBadge
        ref={ref}
        sx={{
          '& .MuiBadge-badge': {
            color: theme.palette[color].contrastText,
            backgroundColor: theme.palette[color].main,
          },
          ...sx,
        }}
        {...other}
      >
        {children}
      </MBadge>
    );
  },
);

Badge.displayName = 'Badge';
export default Badge;
