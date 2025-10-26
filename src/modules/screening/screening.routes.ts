import Elysia from "elysia";
import { createScreeningSchema } from "./screening.schema";
import { ScreeningService } from "./screening.service";

export const screeningRoutes = new Elysia({ prefix: "/screening" })
  .derive(() => ({ screeningService: new ScreeningService() }))
  .get("/", ({ screeningService }) => screeningService.getAll())
  .post(
    "/",
    ({ body, screeningService }) => {
      return screeningService.create(body);
    },
    { body: createScreeningSchema },
  );
