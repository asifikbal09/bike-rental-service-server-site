import { IUser } from '../user/user.interface';
import { User } from '../user/user.model';

const createUserIntoDB = async (payload: IUser) => {
  const newUser = await User.create(payload);
  const result = await User.findById(newUser._id).select('-password');
  return result;
};

export const AuthServices = {
  createUserIntoDB,
};
