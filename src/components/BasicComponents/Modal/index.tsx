import React from 'react';
import AntdModal, { ModalProps as AntdModalProps } from 'antd/es/modal';
import 'antd/es/modal/style/css';

export interface ModalProps extends AntdModalProps {
  children?: any;
}
const Modal = ({ children, ...props }: ModalProps) => (
  <AntdModal {...props}>{children}</AntdModal>
);

Modal.info = AntdModal.info;
Modal.success = AntdModal.success;
Modal.error = AntdModal.error;
Modal.warn = AntdModal.warn;
Modal.warning = AntdModal.warning;
Modal.confirm = AntdModal.confirm;
export default Modal;
