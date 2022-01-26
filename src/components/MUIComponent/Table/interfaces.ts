import React from 'react';

export type Column = {
  id: string;
  label: string;
  align?: 'left' | 'center' | 'right';
  render?: (
    value: any,
    record: any,
    index: number,
    rows: any[],
  ) => React.ReactElement<any> | null;
  canHidable?: boolean;
  isHidden?: boolean;
  canSort?: boolean;
  filterList?: string[];
};

export type PageOptionsProps = {
  page: number;
  pageSize: number;
  order: string;
  orderBy: string;
  //   filter: string;
};

export type RowData = any;
export type RowIndex = number;

export interface MTablePartProps {
  columns: any[];
  rows: any[];
  rowKeyName?: string;
  showRowIndex?: boolean;
  fillEmptyRow?: boolean;
  onChangePage?: (pageOptions: PageOptionsProps) => void;
  onRowClick?: (rowData: RowData, rowIndex: RowIndex) => void;
}
