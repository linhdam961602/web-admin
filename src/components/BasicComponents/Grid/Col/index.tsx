import React from 'react';
import AntdCol, { ColProps } from 'antd/es/grid/col';
import classNames from 'classnames';

const Col: React.FC<ColProps> = ({ className, children, ...restProps }) => (
  <AntdCol {...restProps} className={classNames(className)}>
    {children}
  </AntdCol>
);

export default Col;
