import { z } from 'zod';

const createBikeValidationSchema = z.object({
  body: z.object({
    name: z.string({required_error:"Name is required."}),
    description: z.string({required_error:"Description is required."}),
    pricePerHour: z.number({required_error:"pricePerHour is required."}),
    isAvailable: z.boolean().optional(),
    cc: z.number({required_error:"cc is required."}),
    year: z.number({required_error:"Year is required."}),
    model: z.string({required_error:"Model is required."}),
    brand: z.string({required_error:"Brand is required."}),
  }),
});

const updateBikeValidationSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    description: z.string().optional(),
    pricePerHour: z.number().optional(),
    isAvailable: z.boolean().optional(),
    cc: z.number().optional(),
    year: z.number().optional(),
    model: z.string().optional(),
    brand: z.string().optional(),
  }),
});

export const BikeValidations = {
  createBikeValidationSchema,
  updateBikeValidationSchema,
};
