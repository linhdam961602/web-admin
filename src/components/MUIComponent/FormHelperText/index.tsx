import { forwardRef } from 'react';
import MFormHelperText, {
  FormHelperTextProps,
} from '@mui/material/FormHelperText';

const FormHelperText = forwardRef<HTMLDivElement, FormHelperTextProps>(
  ({ children, ...other }, ref) => (
    <MFormHelperText ref={ref} {...other}>
      {children}
    </MFormHelperText>
  ),
);

FormHelperText.displayName = 'FormHelperText';
export default FormHelperText;
