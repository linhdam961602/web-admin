import React from 'react';
import AntdTag, { TagProps } from 'antd/es/tag';

import 'antd/es/tag/style/css';

const Tag: React.FC<TagProps> = ({ children, color }) => (
  <AntdTag color={color}>{children}</AntdTag>
);

export default Tag;
