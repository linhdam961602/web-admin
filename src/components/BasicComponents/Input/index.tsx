import React from 'react';
import AntdInput, { InputProps } from 'antd/es/input';
import 'antd/es/input/style/css';

const Input = React.forwardRef<AntdInput, InputProps>((props, ref) => (
  <AntdInput {...props} ref={ref} allowClear />
));

Input.displayName = 'Input';
export default Input;
