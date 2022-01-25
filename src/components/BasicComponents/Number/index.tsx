import React from 'react';
import InputNumber, { InputNumberProps } from 'antd/es/input-number';
import 'antd/es/input-number/style/css';

const Number: React.FC<InputNumberProps> = ({ ...props }) => (
  <InputNumber {...props} />
);

export default Number;
