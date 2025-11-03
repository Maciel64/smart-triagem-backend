import type { Patient } from "../patient/patient.model";

export type Severity = "LOW" | "MEDIUM" | "HIGH";
export type Status = "PENDING" | "REVIEWED" | "APPROVED" | "REJECTED" | "FLAGGED"

export class Screening {
  id?: number;
  symptoms?: string[];
  severity?: Severity;
  status?: Status;
  medications?: string[];
  createdAt?: Date;
  updatedAt?: Date;
  patient?: Patient;
}
