import MTableRow from '@mui/material/TableRow';
import MTableCell from '@mui/material/TableCell';
import MTableBody from '@mui/material/TableBody';

import { MTablePartProps } from './interfaces';
import { experimentalStyled as styled } from '@mui/material/styles';

const TableCellStyle = styled(MTableCell)(({ theme }) => ({
  maxWidth: theme.typography.pxToRem(320),
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
}));

function TableBody({ columns, rows }: MTablePartProps) {
  return (
    <MTableBody>
      {rows.map((row, rowIndex) => (
        <MTableRow
          key={row.id}
          sx={{
            '&:last-child td, &:last-child th': { border: 0 },
            cursor: 'pointer',
          }}
        >
          {columns.map((cell, cellIndex) => (
            <TableCellStyle key={`r${rowIndex}${cell.id}${cellIndex}`}>
              {cell.render
                ? cell.render(row[cell.id], row, rowIndex, rows)
                : row[cell.id]}
            </TableCellStyle>
          ))}
        </MTableRow>
      ))}
    </MTableBody>
  );
}

export default TableBody;
