import { forwardRef } from 'react';
import MAutocomplete from '@mui/material/Autocomplete';

const Autocomplete = forwardRef<HTMLInputElement, any>(
  ({ children, ...other }, ref) => (
    <MAutocomplete ref={ref} {...other}>
      {children}
    </MAutocomplete>
  ),
);

Autocomplete.displayName = 'Autocomplete';
export default Autocomplete;
