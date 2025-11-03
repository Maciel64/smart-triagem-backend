import { z } from "zod";

export const createScreeningSchema = z.object({
  patient: z.object({
    name: z.string(),
    age: z.number().int().positive(),
    sex: z.enum(["MALE", "FEMALE", "OTHER"]),
    email: z.string(),
    phone: z.string(),
  }),
  symptoms: z.array(z.string()),
  medications: z.array(z.string()),
});

export type CreateScreeningSchema = z.infer<typeof createScreeningSchema>;