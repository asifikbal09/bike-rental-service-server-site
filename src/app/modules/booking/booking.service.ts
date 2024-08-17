import httpStatus from 'http-status';
import AppError from '../../error/appError';
import { Bike } from '../bike/bike.model';
import { IBooking } from './booking.interface';
import { Booking } from './booking.model';
import { startSession } from 'mongoose';

const createBookingIntoDB = async (userId: string, payload: IBooking) => {
  const isBikeExists = await Bike.findOne({
    _id: payload.bikeId,
    isAvailable: true,
  });

  if (!isBikeExists) {
    throw new AppError(httpStatus.NOT_FOUND, 'Bike is not available.');
  }

  const bookingInfo = {
    userId,
    bikeId: payload.bikeId,
    startTime: payload.startTime,
  };

  const session = await startSession();

  try {
    session.startTransaction();
    const bikeStatusUpdate = await Bike.findByIdAndUpdate(
      isBikeExists._id,
      { isAvailable: false },
      { new: true, session },
    );
    if (!bikeStatusUpdate) {
      throw new AppError(
        httpStatus.BAD_GATEWAY,
        'Failed to change Bike status.',
      );
    }

    const result = await Booking.create([bookingInfo], { session });

    await session.commitTransaction();
    await session.endSession();

    return result;
  } catch (err) {
    await session.abortTransaction();
    await session.endSession();
    throw new AppError(500, 'Failed to make your rental!');
  }
};

export const BookingServices = {
  createBookingIntoDB,
};
