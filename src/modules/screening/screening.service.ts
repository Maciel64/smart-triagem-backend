import { extractSeverity, handleGeneratePrompt } from "../genAi/genAi.helpers";
import type { GenAiProvider } from "../genAi/genAi.provider";
import type { PatientService } from "../patient/patient.service";
import type { ScreeningRepository } from "./screening.repository";
import type {
  CreateScreeningSchema,
  GetScreeningsSchema,
} from "./screening.schema";

export class ScreeningService {
  constructor(
    private readonly screeningRepository: ScreeningRepository,
    private readonly genAiService: GenAiProvider,
    private readonly patientService: PatientService
  ) {}

  getAll(data: GetScreeningsSchema) {
    return this.screeningRepository.getAll(data);
  }

  async create(eventData: CreateScreeningSchema) {
    const { patient, ...data } = eventData;

    const dbPatient = await this.patientService.upsert(patient);

    const aiScreening = await this.genAiService.generate(
      handleGeneratePrompt(eventData)
    );

    const severity = extractSeverity(aiScreening);

    return this.screeningRepository.create({
      ...data,
      patientId: dbPatient.id,
      status: "PENDING",
      severity,
      aiScreening,
    });
  }
}
