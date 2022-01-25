import React from 'react';
import AntdCheckbox, { CheckboxProps } from 'antd/es/checkbox';

import 'antd/es/checkbox/style/css';

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (props, ref) => {
    const { children, ...restProps } = props;

    return (
      <AntdCheckbox ref={ref} {...restProps}>
        {children}
      </AntdCheckbox>
    );
  },
);

Checkbox.displayName = 'Checkbox';
export default Checkbox;
