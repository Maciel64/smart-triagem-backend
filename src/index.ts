import cors from "@elysiajs/cors";
import { Elysia } from "elysia";
import { screeningRoutes } from "./modules/screening/screening.routes";

export const runtime = "edge";

const app = new Elysia({ prefix: "/api/v1" })
  .use(cors())
  .use(screeningRoutes)
  .listen(3001);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);

export default async function handler(request: Request) {
  return app.fetch(request);
}
