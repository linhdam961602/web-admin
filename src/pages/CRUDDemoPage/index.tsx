import React, { useEffect, useRef, useState } from 'react';
import { shallowEqual } from 'react-redux';
import dayjs from 'dayjs';
import { useIntl } from 'react-intl';
import { PlusOutlined, TagOutlined } from '@ant-design/icons';
import {
  useAppDispatch,
  useAppSelector,
  useInjectReducer,
  useInjectSaga,
} from 'store/hooks';

import Button from 'components/BasicComponents/Button';

import CreateUpdateModal, {
  Handler as UserFormHandler,
} from './components/Modal';
import UserTable from './components/Table';

import { sliceName, reducer, saga, sagaActions, selectors } from './slices';
import { StyledGroupBtnWrapper, StyledWrapper, StyledTitle } from './styled';
import { UserModel } from './models';

interface IProps {
  [key: string]: any;
}

// By typing our component as an FC, the React TypeScripts types allow us to handle children and defaultProps, contextTypes... correctly
const UserManagementPage: React.FC<IProps> = () => {
  useInjectReducer({ key: sliceName, reducer });
  useInjectSaga({ key: sliceName, saga });
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [formDetail, setFormDetail] = useState({});
  const formRef = useRef<UserFormHandler>(null);
  const intl = useIntl();

  const data = useAppSelector(selectors.dataSelected, shallowEqual);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(sagaActions.fetchUsers());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOk = () => {
    setIsModalVisible(false);
    const user = formRef.current?.getData();
    if (isUpdate) {
      dispatch(sagaActions.updateUser(user));
    } else {
      dispatch(sagaActions.newUser(user));
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleDelete = (userId: string) => {
    setIsModalVisible(false);
    dispatch(sagaActions.deleteUser(userId));
  };

  const onCreate = () => {
    setIsModalVisible(true);
    setIsUpdate(false);
    setFormDetail({});
  };

  const onUpdate = (data: UserModel) => {
    setIsModalVisible(true);
    setFormDetail({ ...data, birthday: dayjs(data.birthday) });
    setIsUpdate(true);
  };

  return (
    <>
      <StyledWrapper>
        <StyledTitle>
          <TagOutlined />
          &nbsp;
          <h1>User management</h1>
        </StyledTitle>
        <StyledGroupBtnWrapper>
          <Button type="primary" icon={<PlusOutlined />} onClick={onCreate}>
            {intl.formatMessage({ id: 'common.button.new' })}
          </Button>
        </StyledGroupBtnWrapper>
        <UserTable data={data} onDblClickRow={onUpdate} />
      </StyledWrapper>
      {isModalVisible && (
        <CreateUpdateModal
          handleCancel={handleCancel}
          handleOk={handleOk}
          handleDelete={handleDelete}
          isModalVisible={isModalVisible}
          isUpdate={isUpdate}
          formDetail={formDetail}
          ref={formRef}
        />
      )}
    </>
  );
};

export default UserManagementPage;
