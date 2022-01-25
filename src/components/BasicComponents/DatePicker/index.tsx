import React, { forwardRef } from 'react';
import AntdDatePicker, { DatePickerProps } from 'antd/es/date-picker';
import localeUS from 'antd/es/date-picker/locale/en_US';
import 'antd/es/date-picker/style/css';
import { NORMAL_DATE_FORMAT } from 'constants/common';

const DatePicker = forwardRef<any, DatePickerProps>(
  ({ format = NORMAL_DATE_FORMAT, locale = localeUS, ...restProps }, ref) => (
    <AntdDatePicker {...restProps} ref={ref} locale={locale} format={format} />
  ),
);

export const RangePicker = AntdDatePicker.RangePicker;

DatePicker.displayName = 'DatePicker';
export default DatePicker;
