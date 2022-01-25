import React from 'react';
import AntdList, { ListProps } from 'antd/es/list';
import 'antd/es/list/style/css';

const List = ({ children, ...props }: ListProps<any>) => (
  <AntdList {...props}>{children}</AntdList>
);

List.Item = AntdList.Item;

export default List;
