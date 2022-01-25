import React from 'react';
import Table from 'components/BasicComponents/Table';

import { columns } from './columns';
import { UserModel } from '../../models';

interface IProps {
  data: UserModel[];
  onDblClickRow: (data: UserModel) => void;
}

const UserTable: React.FC<IProps> = ({ data, onDblClickRow }) => (
  <>
    <Table
      rowKey={(record) => record.id}
      dataSource={data}
      columns={columns}
      onRow={(record) => ({
        onDoubleClick: () => onDblClickRow(record), // double click row
      })}
    />
  </>
);

export default UserTable;
