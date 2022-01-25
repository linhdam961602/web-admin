import { forwardRef } from 'react';
import { useTheme, Theme } from '@mui/material';
import MAvatar, { AvatarProps } from '@mui/material/Avatar';

// ----------------------------------------------------------------------

type AvatarColor =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'info'
  | 'success'
  | 'warning'
  | 'error';

// ----------------------------------------------------------------------

export interface MAvatarProps extends AvatarProps {
  color?: AvatarColor;
}

const Avatar = forwardRef<HTMLDivElement, MAvatarProps>(
  ({ color = 'default', children, sx, ...other }, ref) => {
    const theme = useTheme<Theme>();

    if (color === 'default') {
      return (
        <MAvatar ref={ref} sx={sx} {...other}>
          {children}
        </MAvatar>
      );
    }

    return (
      <MAvatar
        ref={ref}
        sx={{
          fontWeight: theme.typography.fontWeightMedium,
          color: theme.palette[color].contrastText,
          backgroundColor: theme.palette[color].main,
          ...sx,
        }}
        {...other}
      >
        {children}
      </MAvatar>
    );
  },
);

Avatar.displayName = 'MAvatar';
export default Avatar;
