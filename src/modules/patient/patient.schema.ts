import z from "zod";
import { sex } from "./patient.model";

export const createPatientSchema = z.object({
  name: z.string().min(3).max(100),
  email: z.email(),
  phone: z.string(),
  sex: z.enum(sex),
  age: z.number(),
});

export type CreatePatientSchema = z.infer<typeof createPatientSchema>;
