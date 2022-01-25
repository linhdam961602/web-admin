import { Expose } from 'class-transformer';
import BaseModel from 'models/BaseModel';

class UserModel extends BaseModel {
  @Expose({ name: 'id' })
  id: string;

  @Expose({ name: 'name' })
  name: string;

  @Expose({ name: 'gender' })
  gender: string;

  @Expose({ name: 'dob' })
  birthday: string;

  @Expose({ name: 'createdAt' })
  createdAt: string;
}

export { UserModel };
