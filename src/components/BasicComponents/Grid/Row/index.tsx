import React from 'react';
import AntdRow, { RowProps } from 'antd/es/grid/row';
import classNames from 'classnames';

const Row: React.FC<RowProps> = ({ className, children, ...restProps }) => (
  <AntdRow {...restProps} className={classNames(className)}>
    {children}
  </AntdRow>
);

export default Row;
