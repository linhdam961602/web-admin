import { forwardRef } from 'react';
import MListItemText, { ListItemTextProps } from '@mui/material/ListItemText';

const ListItemText = forwardRef<HTMLDivElement, ListItemTextProps>(
  ({ children, ...other }, ref) => (
    <MListItemText ref={ref} {...other}>
      {children}
    </MListItemText>
  ),
);

ListItemText.displayName = 'ListItemText';
export default ListItemText;
