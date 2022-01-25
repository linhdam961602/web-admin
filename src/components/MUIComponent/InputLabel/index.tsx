import { forwardRef } from 'react';
import MInputLabel, { InputLabelProps } from '@mui/material/InputLabel';

const InputLabel = forwardRef<HTMLLabelElement, InputLabelProps>(
  ({ children, ...other }, ref) => (
    <MInputLabel ref={ref} {...other}>
      {children}
    </MInputLabel>
  ),
);

InputLabel.displayName = 'InputLabel';
export default InputLabel;
