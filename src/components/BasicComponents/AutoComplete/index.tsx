import React from 'react';
import AntdAutoComplete, { AutoCompleteProps } from 'antd/es/auto-complete';
import classNames from 'classnames';
import 'antd/es/auto-complete/style/css';

const AutoComplete: React.FC<AutoCompleteProps> = ({
  className,
  children,
  ...restProps
}) => (
  <AntdAutoComplete {...restProps} className={classNames(className)}>
    {children}
  </AntdAutoComplete>
);

export default AutoComplete;
