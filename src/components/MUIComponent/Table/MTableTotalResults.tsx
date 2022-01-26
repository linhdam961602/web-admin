import { memo } from 'react';
import { Typography } from '@mui/material';

interface TotalCountProps {
  totalCount: number;
}

function MTableTotalResults({ totalCount }: TotalCountProps) {
  return (
    <Typography
      variant="body2"
      component="span"
      sx={{
        px: 3,
        py: 2.625,
      }}
    >
      Total: {totalCount} item(s)
    </Typography>
  );
}

export default memo(MTableTotalResults);
