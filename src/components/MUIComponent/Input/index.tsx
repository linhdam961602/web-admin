import { forwardRef } from 'react';
import { Theme } from '@mui/material';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import { makeStyles } from '@mui/styles';

type MInputOptionProps = {
  success?: boolean;
};

type MInputPropsExtend = {
  option?: MInputOptionProps;
  // `resize` property works when `multiline` = true
  resize?: 'none' | 'both' | 'horizontal' | 'vertical' | 'block' | 'inline';
};

export type MInputProps = TextFieldProps & MInputPropsExtend;

const useStyles = makeStyles<Theme, MInputProps>((theme: Theme) => ({
  input: (props) => ({
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: props.option?.success
        ? theme.palette.success.main
        : theme.palette.grey[500_32],
    },
  }),
  textField: (props) => ({
    '& textarea': {
      resize: props.multiline ? props.resize || 'vertical' : 'none',
    },
  }),
}));

const Input = forwardRef<any, MInputProps>((props, ref) => {
  const classes = useStyles(props);
  const { InputProps, ...rest } = props;
  return (
    <TextField
      ref={ref}
      className={classes.textField}
      InputProps={{
        className: classes.input,
        ...InputProps,
      }}
      {...rest}
    />
  );
});

Input.displayName = 'Input';

export default Input;
