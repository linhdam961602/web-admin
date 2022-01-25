import { FC } from 'react';

interface UserTableProps {
  users: Array<string>;
}
const UserTable: FC<UserTableProps> = ({ users }) => <>{users}</>;

export default UserTable;
