import { db } from "../../providers/db/prisma";
import type { Severity, Status } from "./screening.model";
import type {
  CreateScreeningSchema,
  GetScreeningsSchema,
} from "./screening.schema";

type CreateScreeningInput = Omit<CreateScreeningSchema, "patient"> & {
  patientId: string;
  status: Status;
  severity?: Severity | null;
  aiScreening?: string | null;
};

export class ScreeningRepository {
  getAll(data: GetScreeningsSchema) {
    return db.screening.findMany({
      where: {
        patient: {
          email: data.email,
          phone: data.phone,
        },
      },
      include: {
        patient: true,
      },
    });
  }

  create(data: CreateScreeningInput) {
    return db.screening.create({
      data,
    });
  }
}
