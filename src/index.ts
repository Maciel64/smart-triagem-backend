import { Elysia } from "elysia";

import { screeningRoutes } from "./modules/screening/screening.routes";
import { ScreeningService } from "./modules/screening/screening.service";

const app = new Elysia({ prefix: "/api/v1" })
.decorate('screeningService', new ScreeningService())
.use(screeningRoutes).listen(3001);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`,
);
