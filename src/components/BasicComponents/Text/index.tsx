import React from 'react';
import Typography from 'antd/es/typography';
import { TextProps } from 'antd/es/typography/Text';
import 'antd/es/typography/style/css';

const Text: React.FC<TextProps> = ({ children, ...props }) => (
  <Typography.Text {...props}>{children}</Typography.Text>
);

export default Text;
