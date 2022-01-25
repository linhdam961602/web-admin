import { forwardRef } from 'react';
import { withStyles } from '@mui/styles';
import { useIntl } from 'react-intl';
import MDatePicker, { DatePickerProps } from '@mui/lab/DatePicker';
import Input from 'components/MUIComponent/Input';

import { BASIC_DATE_FORMAT, BASIC_DATE_MASK } from 'constants/common';

import { calendarHeaderStyles } from './styled';

const StyledDatePicker = withStyles(calendarHeaderStyles)(MDatePicker);

export interface MDatePickerProps
  extends Omit<DatePickerProps, 'renderInput' | 'onChange'> {
  name: string;
  onChange: (field: string, value: any, shouldValidate?: boolean) => void;
  inputOptions?: any;
  error?: boolean;
  helperText?: string;
}

const DatePicker = forwardRef<HTMLDivElement, MDatePickerProps>(
  (
    {
      value,
      name,
      onChange,
      inputOptions,
      error,
      helperText,
      label,
      ...others
    },
    ref,
  ) => {
    const intl = useIntl();

    const handleChange = (value: any) => {
      onChange(name, value);
    };

    return (
      <StyledDatePicker
        ref={ref}
        value={value}
        onChange={handleChange}
        mask={BASIC_DATE_MASK}
        inputFormat={BASIC_DATE_FORMAT}
        label={label}
        toolbarTitle={
          label || intl.formatMessage({ id: 'common.datePicker.selectDate' })
        }
        okText={intl.formatMessage({ id: 'common.button.ok' })}
        cancelText={intl.formatMessage({ id: 'common.button.cancel' })}
        {...others}
        renderInput={(params) => (
          <Input
            {...params}
            {...inputOptions}
            error={error}
            helperText={helperText}
          />
        )}
      />
    );
  },
);

DatePicker.displayName = 'DatePicker';
export default DatePicker;
