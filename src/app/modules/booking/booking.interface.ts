import { Schema } from 'mongoose';

export interface IBooking {
  userId: Schema.Types.ObjectId;
  bikeId: Schema.Types.ObjectId;
  startTime: Date;
  returnTime: Date;
  totalCost: number;
  isReturned: boolean;
}
