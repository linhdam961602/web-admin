import React from 'react';
import AntdForm, { FormProps } from 'antd/es/form';
import 'antd/es/form/style/css';

const Form = ({ children, ...props }: FormProps) => (
  <AntdForm {...props}>{children}</AntdForm>
);

Form.useForm = AntdForm.useForm;
Form.Item = AntdForm.Item;
Form.List = AntdForm.List;
Form.Provider = AntdForm.Provider;

export default Form;
