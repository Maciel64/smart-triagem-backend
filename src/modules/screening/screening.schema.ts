import { z } from "zod";

export const createScreeningSchema = z.object({
  patient: z.object({
    name: z.string(),
    age: z.number().int().positive(),
    gender: z.enum(["male", "female", "other"]),
    email: z.string().optional(),
    phone: z.string().optional(),
  }),
  symptoms: z.array(z.string()),
  severity: z.enum(["mild", "moderate", "severe"]),
  medications: z.array(z.string()).optional(),
});

export type CreateScreeningSchema = z.infer<typeof createScreeningSchema>;