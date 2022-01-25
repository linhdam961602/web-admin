import React from 'react';
import AntdButton, { ButtonProps } from 'antd/es/button';
import 'antd/es/button/style/css';

const Button: React.FC<ButtonProps> = ({ children, ...props }) => (
  <AntdButton {...props}>{children}</AntdButton>
);

export default Button;
