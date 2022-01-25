import React, { useState } from 'react';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as yup from 'yup';

import { useAppDispatch, useInjectReducer, useInjectSaga } from 'store/hooks';

import Button from 'components/MUIComponent/Button';
import Input from 'components/MUIComponent/Input';
import Checkbox from 'components/MUIComponent/Checkbox';
import Stack from 'components/MUIComponent/Stack';
import Box from 'components/MUIComponent/Box';
import Typography from 'components/MUIComponent/Typography';
import InputAdornment from 'components/MUIComponent/InputAdornment';
import IconButton from 'components/MUIComponent/IconButton';
import FormControlLabel from 'components/MUIComponent/FormControlLabel';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useIntl } from 'react-intl';
import { intl } from 'containers/LanguageProvider';
import { ReactComponent as SignIn } from 'illustration/rafiki.svg';
import {
  authSliceName,
  authReducer,
  authSaga,
  authActions,
} from 'containers/Auth/slices';

import { INPUT_TYPES } from 'constants/common';
import useStyles from './styled';

const loginSchema = () =>
  yup.object({
    userName: yup
      .string()
      .required(`${intl.formatMessage({ id: 'login.inputName' })}`),
    password: yup
      .string()
      .required(`${intl.formatMessage({ id: 'login.inputPassword' })}`),
  });
const LoginPage = () => {
  useInjectReducer({ key: authSliceName, reducer: authReducer });
  useInjectSaga({ key: authSliceName, saga: authSaga });
  const intl = useIntl();

  const classes = useStyles();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const formik = useFormik({
    initialValues: {
      userName: '',
      password: '',
      isRemember: true,
    },
    validationSchema: loginSchema,
    onSubmit: (values: any) => {
      dispatch(authActions.login({ values, navigate }));
    },
  });

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>,
  ) => {
    event.preventDefault();
  };

  return (
    <div className={classes.loginWrapper}>
      <div className={classes.devRafikiWrapper}>
        <div className={classes.logo}></div>
        <div className={classes.devRafikiInner}>
          <SignIn />
        </div>
      </div>
      <form
        className={classes.formWrapper}
        noValidate
        onSubmit={formik.handleSubmit}
      >
        <div className={classes.formContent}>
          <Stack direction="row" alignItems="center" sx={{ mb: 5 }}>
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="h4" paragraph gutterBottom>
                {intl.formatMessage({ id: 'login.signIn' })}
              </Typography>
              <span className={classes.subTitle}>
                {intl.formatMessage({ id: 'login.enterDetail' })}
              </span>
            </Box>
          </Stack>
          <Input
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label={intl.formatMessage({ id: 'login.userName' })}
            autoComplete="userName"
            {...formik.getFieldProps('userName')}
            error={formik.touched.userName && Boolean(formik.errors.userName)}
            helperText={formik.touched.userName && formik.errors.userName}
            className={classes.inputLabel}
          />
          <Input
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label={intl.formatMessage({ id: 'login.password' })}
            type={showPassword ? INPUT_TYPES.TEXT : INPUT_TYPES.PASSWORD}
            autoComplete="current-password"
            {...formik.getFieldProps('password')}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                    //  when use tab key it will not focus in icon
                    tabIndex={-1}
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            className={classes.inputLabel}
          />
          <div className={classes.spaceBetween}>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              {...formik.getFieldProps('isRemember')}
              label={intl.formatMessage({ id: 'login.keepSignIn' })}
            />
            <span className={classes.forgotPassword}>
              {intl.formatMessage({ id: 'login.forgotPassword' })}
            </span>
          </div>
          <Button
            style={{ width: '100%' }}
            type="submit"
            variant="contained"
            color="primary"
            size="large"
          >
            {intl.formatMessage({ id: 'login.signIn' })}
          </Button>
          <div className={classes.account}>
            {intl.formatMessage({ id: 'login.dontHaveAccount' })}
            <span>{intl.formatMessage({ id: 'login.registerNow' })}</span>
          </div>
        </div>
        <div className={classes.copyRight}>
          {intl.formatMessage({ id: 'login.copyRight' })}
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
