import { NORMAL_DATE_FORMAT } from 'constants/common';
import dayjs from 'dayjs';

export default [
  {
    id: 1,
    name: 'Test',
    dob: dayjs('1998-02-02').format(NORMAL_DATE_FORMAT),
    createdAt: dayjs().startOf('month').format(NORMAL_DATE_FORMAT),
    gender: 'male',
  },
];
