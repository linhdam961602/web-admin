import { classToPlain, plainToClass } from 'class-transformer';
import IBaseModel from './IBaseModel';

class BaseModel implements IBaseModel {
  static toClass(data: BaseModel, options = {}) {
    try {
      return plainToClass(this, data, {
        excludeExtraneousValues: true,
        ...options,
      });
    } catch (error) {
      // TODO: Handle error
      console.error(error);
    }
  }

  static toPlain(data: BaseModel, options = {}) {
    try {
      return classToPlain(
        plainToClass(this, data, {
          ignoreDecorators: true,
        }),
        { excludeExtraneousValues: true, ...options },
      );
    } catch (error) {
      // TODO: Handle error
      console.error(error);
    }
  }
}

export default BaseModel;
