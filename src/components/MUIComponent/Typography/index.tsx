import { forwardRef } from 'react';
import MTypography, { TypographyProps } from '@mui/material/Typography';

const Typography = forwardRef<HTMLSpanElement, TypographyProps>(
  ({ children, ...other }, ref) => (
    <MTypography ref={ref} {...other}>
      {children}
    </MTypography>
  ),
);

Typography.displayName = 'Typography';
export default Typography;
