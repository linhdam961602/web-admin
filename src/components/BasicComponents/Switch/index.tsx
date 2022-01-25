import React from 'react';
import 'antd/es/switch/style/css';
import AntdSwitch, { SwitchProps } from 'antd/es/switch';

const Switch: React.FC<SwitchProps> = (props) => <AntdSwitch {...props} />;

export default Switch;
