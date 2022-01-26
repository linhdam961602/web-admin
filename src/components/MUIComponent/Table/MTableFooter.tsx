import React from 'react';
import MBox from '@mui/material/Box';
import MTablePagination from '@mui/material/TablePagination';
import MTableTotalResults from './MTableTotalResults';
import { TABLE_ROW_PER_PAGE_OPTIONS } from './constants';
import MTablePaginationActions from './MTablePaginationActions';

interface MTableFooterProps {
  totalCount?: number;
  page: number;
  pageSize: number;
  onSetPage: (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => void;
  onSetRowsPerPage: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isShowFooter?: boolean;
}

function TableFooter({
  totalCount = 0,
  page,
  pageSize,
  onSetPage,
  onSetRowsPerPage,
  isShowFooter,
}: MTableFooterProps) {
  const rowsPerPageLabel = 'Rows per page';
  const handleDisplayRowsLabel = () => '';

  if (!isShowFooter) return <MBox sx={{ p: 2 }} />;

  return (
    <MBox
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
      }}
    >
      <MTableTotalResults totalCount={totalCount} />
      <MTablePagination
        component="div"
        rowsPerPageOptions={TABLE_ROW_PER_PAGE_OPTIONS}
        rowsPerPage={pageSize}
        count={totalCount}
        page={page}
        onPageChange={onSetPage}
        onRowsPerPageChange={onSetRowsPerPage}
        labelRowsPerPage={rowsPerPageLabel}
        labelDisplayedRows={handleDisplayRowsLabel}
        ActionsComponent={MTablePaginationActions}
      />
    </MBox>
  );
}

export default TableFooter;
