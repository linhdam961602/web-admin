import React from 'react';
import AntRadio, { Group } from 'antd/es/radio';
import { RadioGroupProps, RadioProps } from 'antd/es/radio/interface';
import 'antd/es/radio/style/css';

const Radio = React.forwardRef<HTMLInputElement, RadioProps>((props, ref) => (
  <AntRadio {...props} ref={ref} />
));

const RadioGroup = React.forwardRef<HTMLInputElement, RadioGroupProps>(
  ({ children, ...props }, ref) => (
    <>
      <Group {...props} ref={ref}>
        {children}
      </Group>
    </>
  ),
);

Radio.displayName = 'Radio';
RadioGroup.displayName = 'RadioGroup';

export { Radio };

export default RadioGroup;
