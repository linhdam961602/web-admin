import { experimentalStyled as styled } from '@mui/material/styles';
import MTableRow from '@mui/material/TableRow';
import MTableHead from '@mui/material/TableHead';
import MTableCell from '@mui/material/TableCell';
import MTableSortLabel from '@mui/material/TableSortLabel';
import MBox from '@mui/material/Box';
import { BoxProps } from '@mui/material';
import { visuallyHidden } from '@mui/utils';
import { Column } from './interfaces';

type ProductListHeadProps = {
  order?: 'asc' | 'desc';
  orderBy?: string;
  columns: Column[];
  showRowIndex?: boolean;
  onRequestSort: (property: string) => void;
};

const TableCellStyle = styled(MTableCell)({
  whiteSpace: 'pre',
});

function TableHead({
  order,
  orderBy,
  columns,
  onRequestSort,
}: ProductListHeadProps) {
  return (
    <MTableHead>
      <MTableRow>
        {columns.map((cell) =>
          cell.canSort ? (
            <TableCellStyle
              key={cell.id}
              align="center"
              sortDirection={orderBy === cell.id ? order : false}
            >
              <MTableSortLabel
                active={orderBy === cell.id}
                direction={orderBy === cell.id ? order : 'asc'}
                onClick={() => onRequestSort(cell.id)}
              >
                {cell.label}
                {orderBy === cell.id && (
                  <MBox sx={{ ...(visuallyHidden as BoxProps) }} />
                )}
              </MTableSortLabel>
            </TableCellStyle>
          ) : (
            <TableCellStyle key={cell.id}>{cell.label}</TableCellStyle>
          ),
        )}
      </MTableRow>
    </MTableHead>
  );
}

export default TableHead;
