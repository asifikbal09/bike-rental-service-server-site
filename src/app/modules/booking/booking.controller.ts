import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { BookingServices } from './booking.service';

const createBooking = catchAsync(async (req, res) => {
  const user = req.user;
  const result = await BookingServices.createBookingIntoDB(user._id, req.body);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Rental created successfully',
    data: result,
  });
});

export const BookingControllers = {
  createBooking,
};
