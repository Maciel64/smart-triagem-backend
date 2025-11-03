import type { PatientRepository } from "./patient.repository";
import type { CreatePatientSchema } from "./patient.schema";

export class PatientService {
  constructor(private readonly patientRepository: PatientRepository) {}

  upsert(data: CreatePatientSchema) {
    return this.patientRepository.upsert(data);
  }
}
