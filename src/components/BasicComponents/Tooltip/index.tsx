import React from 'react';
import AntdTooltip, { TooltipProps } from 'antd/es/tooltip';
import 'antd/es/tooltip/style/css';

const Tooltip: React.FC<TooltipProps> = ({ children, ...props }) => (
  <AntdTooltip {...props}>{children}</AntdTooltip>
);

export default Tooltip;
