import { forwardRef } from 'react';
import MFormControlLabel, {
  FormControlLabelProps,
} from '@mui/material/FormControlLabel';

const FormControlLabel = forwardRef<any, FormControlLabelProps>(
  (props, ref) => <MFormControlLabel ref={ref} {...props} />,
);

FormControlLabel.displayName = 'FormControlLabel';
export default FormControlLabel;
