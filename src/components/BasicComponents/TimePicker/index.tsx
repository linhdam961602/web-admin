import React, { forwardRef } from 'react';

import AntdTimePicker, { TimePickerProps } from 'antd/es/time-picker';
import 'antd/es/time-picker/style/css';

import { NORMAL_TIME_FORMAT } from 'constants/common';

const TimePicker = forwardRef<HTMLTimeElement, TimePickerProps>(
  ({ format = NORMAL_TIME_FORMAT, ...restProps }, ref) => (
    <AntdTimePicker {...restProps} ref={ref} format={format} />
  ),
);

TimePicker.displayName = 'TimePicker';
export default TimePicker;
