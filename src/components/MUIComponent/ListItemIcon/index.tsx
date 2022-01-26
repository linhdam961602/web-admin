import { forwardRef } from 'react';
import MListItemIcon, { ListItemIconProps } from '@mui/material/ListItemIcon';

const ListItemIcon = forwardRef<HTMLDivElement, ListItemIconProps>(
  ({ children, ...other }, ref) => (
    <MListItemIcon ref={ref} {...other}>
      {children}
    </MListItemIcon>
  ),
);

ListItemIcon.displayName = 'ListItemIcon';
export default ListItemIcon;
