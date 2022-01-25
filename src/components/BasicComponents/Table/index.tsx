import React, { useState, useEffect } from 'react';
import AntdTable, { TableProps as AntdProps } from 'antd/es/table';
import 'antd/es/table/style/css';

export interface TableProps extends AntdProps<any> {
  columns: any[];
  dataSource: any[];
}

const Table: React.FC<TableProps> = (props) => {
  const { columns, dataSource } = props;
  const [colState, setColState] = useState(columns);

  const getDataSource = (): any[] => {
    if (!dataSource || !dataSource.length) return []; // check null to return empty message

    return dataSource;
  };

  useEffect(() => {
    // re-update column when column props is changed
    setColState(columns);
  }, [columns]);

  return (
    <AntdTable {...props} columns={colState} dataSource={getDataSource()} />
  );
};

export default Table;
