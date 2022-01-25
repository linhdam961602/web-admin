import React from 'react';
import AntdSelect, { SelectProps as AntSelectProps } from 'antd/es/select';
import 'antd/es/select/style/css';
import { SelectValue } from 'antd/lib/select';

const { Option, OptGroup } = AntdSelect;

export interface SelectProps<ValueType> extends AntSelectProps<ValueType> {
  children?: React.ReactNode;
}

function Select<ValueType extends SelectValue>({
  children,
  ...restProps
}: SelectProps<ValueType>) {
  return <AntdSelect {...restProps}>{children}</AntdSelect>;
}

Select.Option = Option;
Select.OptGroup = OptGroup;

export default Select;
