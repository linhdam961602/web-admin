import { forwardRef } from 'react';
import { useTheme, Theme } from '@mui/material';
import MSelect, { SelectProps } from '@mui/material/Select';

const Select = forwardRef<any, SelectProps>((props) => {
  const theme = useTheme<Theme>();
  const StyleMenuSelect = {
    PaperProps: {
      style: {
        maxHeight: theme.typography.pxToRem(189),
      },
    },
  };
  return <MSelect {...props} MenuProps={StyleMenuSelect} />;
});

Select.displayName = 'Select';
export default Select;
