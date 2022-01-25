import React from 'react';
import AntdDropdown, { DropDownProps } from 'antd/es/dropdown';
import 'antd/es/dropdown/style/css';

const Dropdown: React.FC<DropDownProps> = ({ children, ...props }) => (
  <AntdDropdown {...props}>{children}</AntdDropdown>
);

export default Dropdown;
