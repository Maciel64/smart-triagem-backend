import { db } from "../../providers/db/prisma";
import type { CreateScreeningSchema } from "./screening.schema";

export class ScreeningService {
  getAll() {
    return db.screening.findMany();
  }

  create(data: CreateScreeningSchema) {
  }
}