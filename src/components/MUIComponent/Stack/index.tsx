import { forwardRef } from 'react';
import MStack, { StackProps } from '@mui/material/Stack';

const Stack = forwardRef<HTMLDivElement, StackProps>(
  ({ children, ...other }, ref) => (
    <MStack ref={ref} {...other}>
      {children}
    </MStack>
  ),
);

Stack.displayName = 'Stack';
export default Stack;
