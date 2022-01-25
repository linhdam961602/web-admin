import React from 'react';
import AntdTabs, { TabsProps } from 'antd/es/tabs';
import 'antd/es/tabs/style/css';

const { TabPane } = AntdTabs;

export interface Props extends TabsProps {
  children?: React.ReactElement | React.ReactElement[] | React.ReactNode[];
}

const Tabs = ({ children, ...props }: Props) => (
  <AntdTabs {...props}>{children}</AntdTabs>
);

Tabs.TabPane = TabPane;
export { TabPane };
export default Tabs;
