import React, { useState, useEffect, useCallback } from 'react';
import isEmpty from 'lodash/isEmpty';
import orderBy from 'lodash/orderBy';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Dialog from 'components/MUIComponent/Dialog';

import Table from 'components/MUIComponent/Table';
import { ASCENDANT, DESCENDANT } from 'components/MUIComponent/Table/constants';
import { PageOptionsProps } from 'components/MUIComponent/Table/interfaces';
import { mockData, headData } from './mockData';

const TableDemo = () => {
  const [sortProperty, setSortProperty] = useState<string>('');
  const [sortDirection, setSortDirection] = useState<boolean>(true);
  const [tableValues, setTableValues]: any = useState({
    itemPerPage: 5,
    pageNum: 0,
  });
  const [listDataSort, setListDataSort]: any = useState([]);
  const [open, setOpen] = React.useState(false);

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  const handleChangePage = useCallback(
    ({ page = 1, pageSize = 10 }: PageOptionsProps) => {
      setTableValues({
        itemPerPage: pageSize,
        pageNum: page,
      });
    },
    [setTableValues],
  );

  useEffect(() => {
    // Sorting
    const sortedList = !isEmpty(sortProperty)
      ? orderBy(
          mockData,
          [sortProperty],
          [sortDirection ? ASCENDANT : DESCENDANT],
        )
      : mockData;

    // Pagination
    const { itemPerPage, pageNum } = tableValues;
    const start = itemPerPage * pageNum;
    const end = start + itemPerPage;
    const listDataSort = sortedList.slice(start, end);
    setListDataSort(listDataSort);
  }, [tableValues, sortProperty, sortDirection]);

  const handleSort = (column: string, isAsc: boolean) => {
    setSortProperty(column);
    setSortDirection(isAsc);
  };

  useEffect(() => {
    setTableValues({
      itemPerPage: 5,
      pageNum: 0,
    });
  }, []);

  return (
    <>
      <h2>TABLE DEMO</h2>
      <Button onClick={handleOpen}>Open modal</Button>
      <Dialog
        isOpenDialog={open}
        onCloseDialog={handleClose}
        onNo={handleClose}
        onYes={handleClose}
        cancelText="Cancel"
        confirmText="Save"
      >
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Text in a modalText in a modalText in a modalText in a modalText in a
          modal
        </Typography>
      </Dialog>
      <Table
        columns={headData}
        rows={listDataSort}
        isShowFooter={true}
        totalCount={mockData.length}
        onChangePage={handleChangePage}
        onSort={handleSort}
      />
    </>
  );
};

export default TableDemo;
