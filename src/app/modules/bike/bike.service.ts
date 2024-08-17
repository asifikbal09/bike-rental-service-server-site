import httpStatus from 'http-status';
import AppError from '../../error/appError';
import { IBike } from './bike.interface';
import { Bike } from './bike.model';

const createBikeIntoDB = async (payload: IBike) => {
  const result = await Bike.create(payload);
  return result;
};

const getAllBikeFromDB = async () => {
  const result = await Bike.find();
  return result;
};

const updateBikeInfoFromDB = async (id: string, payload: Partial<IBike>) => {
  const isBikeExists = await Bike.findById(id);
  if (!isBikeExists) {
    throw new AppError(httpStatus.NOT_FOUND, 'Bike not found.');
  }
  const result = await Bike.findByIdAndUpdate(id, payload, { new: true });
  return result;
};

export const BikeServices = {
  createBikeIntoDB,
  getAllBikeFromDB,
  updateBikeInfoFromDB,
};
