import { model, Schema } from 'mongoose';
import { IBike } from './bike.interface';

const bikeSchema = new Schema<IBike>({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  pricePerHour: {
    type: Number,
    required: true,
  },
  isAvailable: {
    type: Boolean,
    default: true,
    required: true,
  },
  cc: {
    type: Number,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
});

export const Bike = model<IBike>('Bike', bikeSchema);
