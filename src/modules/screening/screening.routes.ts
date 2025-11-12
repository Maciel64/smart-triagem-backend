import Elysia from "elysia";
import { setup } from "../../setup";
import { createScreeningSchema } from "./screening.schema";

export const screeningRoutes = new Elysia({ prefix: "/screening" })
  .use(setup)
  .get("/", ({ screeningService, query }) => screeningService.getAll(query))
  .post(
    "/",
    async ({ body, screeningService }) => screeningService.create(body),
    { body: createScreeningSchema }
  );
