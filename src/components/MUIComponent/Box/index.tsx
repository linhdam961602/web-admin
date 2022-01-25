import { forwardRef } from 'react';
import MBox, { BoxProps } from '@mui/material/Box';

const Box = forwardRef<HTMLDivElement, BoxProps>(
  ({ children, ...other }, ref) => (
    <MBox ref={ref} {...other}>
      {children}
    </MBox>
  ),
);

Box.displayName = 'Box';
export default Box;
