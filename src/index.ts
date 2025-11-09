import cors from "@elysiajs/cors";
import { Elysia } from "elysia";
import { screeningRoutes } from "./modules/screening/screening.routes";
import { patientRoutes } from "./modules/patient/patient.routes";

const app = new Elysia({ prefix: "/api/v1" })
  .use(cors())
  .use(screeningRoutes)
  .use(patientRoutes)
  .listen(3001);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
