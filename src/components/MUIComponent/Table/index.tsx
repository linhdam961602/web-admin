import React, {
  useState,
  useEffect,
  useCallback,
  memo,
  forwardRef,
  useRef,
} from 'react';
import MTable from '@mui/material/Table';
import MTableContainer from '@mui/material/TableContainer';
import TableBody from './MTableBody';
import TableHead from './MTableHead';
import MTableFooter from './MTableFooter';
import { MTablePartProps } from './interfaces';
import { DEFAULT_PAGE_SIZE, ASCENDANT, DESCENDANT } from './constants';

interface MTableProps extends MTablePartProps {
  totalCount?: number;
  defaultPageSize?: number;
  checkboxSelection?: boolean;
  onSort?: (column: string, isAsc: boolean) => void;
  defaultDirection?: typeof ASCENDANT | typeof DESCENDANT;
  isShowFooter?: boolean;
}

function Table({
  columns,
  rows,
  totalCount,
  defaultPageSize,
  isShowFooter,
  onChangePage,
  onSort,
  defaultDirection,
}: MTableProps) {
  const [page, setPage] = useState<number>(0);
  const [pageSize, setPageSize] = useState<number>(
    defaultPageSize || DEFAULT_PAGE_SIZE,
  );
  const [order, setOrder] = useState<typeof ASCENDANT | typeof DESCENDANT>(
    defaultDirection || ASCENDANT,
  );
  const [orderBy, setOrderBy] = useState<string>('');
  const didMount = useRef<boolean>(false);

  const handleSetRowsPerPage = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPageSize(parseInt(e.target.value, 10));
      setPage(0);
    },
    [setPageSize, setPage],
  );

  const handleRequestSort = useCallback(
    (property: string) => {
      const isAsc = orderBy === property && order === ASCENDANT;
      setOrder(isAsc ? DESCENDANT : ASCENDANT);
      setOrderBy(property);
      onSort && onSort(property, isAsc);
    },
    [order, orderBy, setOrder, setOrderBy, onSort],
  );

  const handleSetPage = useCallback(
    (e: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
      setPage(newPage);
    },
    [setPage],
  );

  useEffect(() => {
    if (didMount.current) {
      !!onChangePage && onChangePage({ page, pageSize, order, orderBy });
    } else {
      didMount.current = true;
    }
  }, [page, pageSize, order, orderBy, onChangePage]);

  return (
    <>
      <MTableContainer>
        <MTable>
          <TableHead
            order={order}
            orderBy={orderBy}
            columns={columns}
            onRequestSort={handleRequestSort}
          />

          <TableBody rows={rows} columns={columns} />
        </MTable>
      </MTableContainer>

      <MTableFooter
        totalCount={totalCount}
        page={page}
        pageSize={pageSize}
        onSetPage={handleSetPage}
        onSetRowsPerPage={handleSetRowsPerPage}
        isShowFooter={isShowFooter}
      />
    </>
  );
}

export default memo(forwardRef(Table));
