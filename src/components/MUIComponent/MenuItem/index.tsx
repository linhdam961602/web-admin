import { forwardRef } from 'react';
import MMenuItem, { MenuItemProps } from '@mui/material/MenuItem';

const MenuItem = forwardRef<any, MenuItemProps>(
  ({ children, ...other }, ref) => (
    <MMenuItem ref={ref} {...other}>
      {children}
    </MMenuItem>
  ),
);

MenuItem.displayName = 'MenuItem';
export default MenuItem;
