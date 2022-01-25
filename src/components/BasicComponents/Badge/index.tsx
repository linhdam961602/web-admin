import React from 'react';
import AntdBadge, { BadgeProps as Props } from 'antd/es/badge';
import 'antd/es/badge/style/css';
import classNames from 'classnames';

export interface BadgeProps extends Props {
  children?: React.ReactNode;
  count?: number | React.ReactNode;
}

const Badge: React.FC<BadgeProps> = ({ className, children, ...restProps }) => (
  <AntdBadge {...restProps} className={classNames(className)}>
    {children}
  </AntdBadge>
);

export default Badge;
