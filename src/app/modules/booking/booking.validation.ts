import { z } from 'zod';

const createBookingValidationSchema = z.object({
  body: z.object({
    userId: z.string(),
    bikeId: z.string(),
    startTime: z.date(),
    returnTime: z.date(),
    totalCost: z.number(),
    isReturned: z.boolean(),
  }),
});

export const BookingValidation = {
  createBookingValidationSchema,
};
