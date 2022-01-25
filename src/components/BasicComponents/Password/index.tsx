import React from 'react';
import AntdPassword, { PasswordProps } from 'antd/es/input/Password';
import 'antd/es/input/style/css';

const Password = React.forwardRef<HTMLInputElement, PasswordProps>(
  ({ ...restProps }, ref) => (
    <AntdPassword {...restProps} ref={ref} allowClear />
  ),
);

Password.displayName = 'Password';

export default Password;
