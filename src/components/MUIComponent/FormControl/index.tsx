import { forwardRef } from 'react';
import MFormControl, { FormControlProps } from '@mui/material/FormControl';

const FormControl = forwardRef<HTMLDivElement, FormControlProps>(
  ({ children, ...other }, ref) => (
    <MFormControl ref={ref} {...other}>
      {children}
    </MFormControl>
  ),
);

FormControl.displayName = 'FormControl';
export default FormControl;
