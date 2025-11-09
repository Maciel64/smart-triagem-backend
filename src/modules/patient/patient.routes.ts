import Elysia from "elysia";
import { setup } from "../../setup";

export const patientRoutes = new Elysia({ prefix: "/patient" })
  .use(setup)
  .get("/", ({ patientService }) => patientService.getAll());
