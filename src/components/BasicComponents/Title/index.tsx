import React from 'react';
import Typography from 'antd/es/typography';
import { TitleProps } from 'antd/es/typography/Title';
import 'antd/es/typography/style/css';

const Title: React.FC<TitleProps> = ({ children, ...restProps }) => (
  <Typography.Title {...restProps}>{children}</Typography.Title>
);

export default Title;
