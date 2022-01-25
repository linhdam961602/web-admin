import { forwardRef } from 'react';
import MInputAdornment, {
  InputAdornmentProps,
} from '@mui/material/InputAdornment';

const InputAdornment = forwardRef<HTMLInputElement, InputAdornmentProps>(
  ({ children, ...other }, ref) => (
    <MInputAdornment ref={ref} {...other}>
      {children}
    </MInputAdornment>
  ),
);

InputAdornment.displayName = 'InputAdornment';
export default InputAdornment;
