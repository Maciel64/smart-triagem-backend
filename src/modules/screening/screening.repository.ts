import { db } from "../../providers/db/prisma";
import type { Severity, Status } from "./screening.model";
import type { CreateScreeningSchema } from "./screening.schema";

type CreateScreeningInput = Omit<CreateScreeningSchema, "patient"> & {
  patientId: string;
  status: Status;
  severity?: Severity | null;
  aiScreening?: string | null;
};

export class ScreeningRepository {
  getAll() {
    return db.screening.findMany({
      include: {
        patient: true
      }
    });
  }

  create(data: CreateScreeningInput) {
    return db.screening.create({
      data,
    });
  }
}
