import React from 'react';
import Input, { InputProps } from 'antd/es/input';
import 'antd/es/input/style/css';

const Email: React.FC<InputProps> = ({ allowClear = true, ...props }) => (
  <Input {...props} allowClear={allowClear} type="email" />
);

export default Email;
