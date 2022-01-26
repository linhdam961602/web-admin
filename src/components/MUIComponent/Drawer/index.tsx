import { forwardRef } from 'react';
import MDrawer, { DrawerProps } from '@mui/material/Drawer';

const Drawer = forwardRef<HTMLDivElement, DrawerProps>(
  ({ children, ...other }, ref) => (
    <MDrawer ref={ref} {...other}>
      {children}
    </MDrawer>
  ),
);

Drawer.displayName = 'Drawer';
export default Drawer;
