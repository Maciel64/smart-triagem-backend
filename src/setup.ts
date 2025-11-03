import Elysia from "elysia";
import { GenAiProvider } from "./modules/genAi/genAi.provider";
import { PatientRepository } from "./modules/patient/patient.repository";
import { PatientService } from "./modules/patient/patient.service";
import { ScreeningRepository } from "./modules/screening/screening.repository";
import { ScreeningService } from "./modules/screening/screening.service";

const screeningRepository = new ScreeningRepository();
const patientRepository = new PatientRepository();

const patientService = new PatientService(patientRepository);

const genAiProvider = new GenAiProvider();

const screeningService = new ScreeningService(
  screeningRepository,
  genAiProvider,
  patientService,
);

export const setup = new Elysia()
  .decorate("patientRepository", patientRepository)
  .decorate("patientService", patientService)
  .decorate("screeningRepository", screeningRepository)
  .decorate("screeningService", screeningService)
  .decorate("genAiProvider", genAiProvider);