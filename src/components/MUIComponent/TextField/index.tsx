import { forwardRef } from 'react';
import MTextField, { TextFieldProps } from '@mui/material/TextField';

const TextField = forwardRef<HTMLInputElement, TextFieldProps>(
  ({ children, ...other }, ref) => (
    <MTextField ref={ref} {...other}>
      {children}
    </MTextField>
  ),
);

TextField.displayName = 'TextField';
export default TextField;
