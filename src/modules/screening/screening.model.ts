import type { Patient } from "../patient/patient.model";

export type Severity = "LOW" | "MEDIUM" | "HIGH";

export class Screening {
  id?: number;
  symptoms?: string[];
  severity?: Severity;
  status?: string;
  medications?: string[];
  createdAt?: Date;
  updatedAt?: Date;
  patient?: Patient;
}
