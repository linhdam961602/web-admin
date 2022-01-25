import React, { useState, useEffect, useCallback } from 'react';
import isEmpty from 'lodash/isEmpty';
import orderBy from 'lodash/orderBy';

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
