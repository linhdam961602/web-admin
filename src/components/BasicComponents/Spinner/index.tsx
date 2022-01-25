import React from 'react';
import Spin, { SpinProps } from 'antd/es/spin';
import 'antd/es/spin/style/css';

const Spinner: React.FC<SpinProps> = ({ className, children, ...props }) => (
  <Spin {...props} className={className}>
    {children}
  </Spin>
);

export default Spinner;
