import { db } from "../../providers/db/prisma";
import type { CreatePatientSchema } from "./patient.schema";

export class PatientRepository {
  upsert(data: CreatePatientSchema) {
    return db.patient.upsert({
      update: data,
      create: data,
      where: {
        email: data.email,
      },
    });
  }
}
