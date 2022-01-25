import React, {
  useEffect,
  forwardRef,
  useImperativeHandle,
  ForwardRefRenderFunction,
} from 'react';
import dayjs from 'dayjs';
import { useIntl } from 'react-intl';

import Modal from 'components/BasicComponents/Modal';
import Form from 'components/BasicComponents/Form';
import Input from 'components/BasicComponents/Input';
import DatePicker from 'components/BasicComponents/DatePicker';
import Select from 'components/BasicComponents/Select';
import Button from 'components/BasicComponents/Button';

import { NORMAL_DATE_FORMAT } from 'constants/common';
import { UserModel } from 'pages/CRUDDemoPage/models';

interface IProps {
  isModalVisible: boolean;
  handleOk: () => void;
  handleCancel: () => void;
  handleDelete: (userId: string) => void;
  isUpdate: boolean;
  formDetail: UserModel | any;
}

export type Handler = {
  getData: () => any;
};

const CreateUpdateModal: ForwardRefRenderFunction<Handler, IProps> = (
  {
    isModalVisible,
    handleOk,
    handleCancel,
    handleDelete,
    isUpdate,
    formDetail,
  }: IProps,
  ref,
) => {
  const [form] = Form.useForm();
  const intl = useIntl();

  useEffect(() => {
    form.setFieldsValue(formDetail);
  }, [form, formDetail]);

  const getData = () => {
    const values = form.getFieldsValue();
    return {
      ...values,
      birthday: dayjs(values?.birthday).format(NORMAL_DATE_FORMAT),
      createdAt: dayjs(values?.birthday).format(NORMAL_DATE_FORMAT),
    };
  };

  useImperativeHandle(ref, () => ({
    getData,
  }));

  const footerModal = () => {
    const footer = [
      <Button key="ok" onClick={handleCancel}>
        {intl.formatMessage({ id: 'common.button.cancel' })}
      </Button>,
      <Button key="submit" type="primary" onClick={handleOk}>
        {intl.formatMessage({ id: 'common.button.ok' })}
      </Button>,
    ];
    return isUpdate
      ? [
          ...footer,
          <Button
            key="delete"
            danger
            onClick={() => handleDelete(formDetail.id)}
          >
            {intl.formatMessage({ id: 'common.button.delete' })}
          </Button>,
        ]
      : footer;
  };
  return (
    <Modal
      title={isUpdate ? 'Update User' : 'Create User'}
      visible={isModalVisible}
      footer={footerModal()}
      onOk={handleOk}
      onCancel={handleCancel}
      destroyOnClose
    >
      <Form
        form={form}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
      >
        <Form.Item label="Id" name="id">
          <Input disabled />
        </Form.Item>
        <Form.Item label="Name" name="name">
          <Input />
        </Form.Item>
        <Form.Item label="Gender" name="gender">
          <Select>
            <Select.Option value="male">male</Select.Option>
            <Select.Option value="female">female</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Birthday" name="birthday">
          <DatePicker />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default forwardRef(CreateUpdateModal);
