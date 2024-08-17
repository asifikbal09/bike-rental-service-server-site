import httpStatus from 'http-status';
import AppError from '../../error/appError';
import { User } from './user.model';

const getSingleUserFromDB = async (id: string) => {
  const result = await User.findById(id).select('-password');
  if (!result) {
    throw new AppError(httpStatus.NOT_FOUND, 'User Not Found.');
  }
  return result;
};

export const UserServices = {
  getSingleUserFromDB,
};
