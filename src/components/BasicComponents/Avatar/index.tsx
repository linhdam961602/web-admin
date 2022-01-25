import React from 'react';
import AntdAvatar, { AvatarProps } from 'antd/es/avatar';
import { UserOutlined } from '@ant-design/icons';
import 'antd/es/avatar/style/css';

const Avatar: React.FC<AvatarProps> = ({ src, ...restProps }) => (
  <AntdAvatar {...restProps} src={src} icon={<UserOutlined />} />
);

export default Avatar;
