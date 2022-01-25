import React, { memo } from 'react';
import { Box, Pagination } from '@mui/material';

interface TablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ) => void;
}

function MTablePaginationActions({
  count: totalCount,
  page: tablePage,
  rowsPerPage,
  onPageChange,
}: TablePaginationActionsProps) {
  const handleChange = (e: React.ChangeEvent<unknown>, newPage: number) => {
    const settingPage = newPage - 1;
    if (tablePage !== settingPage) {
      onPageChange(null, settingPage);
    }
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <Pagination
        count={Math.ceil(totalCount / rowsPerPage)}
        page={tablePage + 1}
        onChange={handleChange}
        color="primary"
      />
    </Box>
  );
}

export default memo(MTablePaginationActions);
