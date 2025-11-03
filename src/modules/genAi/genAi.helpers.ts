import type { CreateScreeningSchema } from "../screening/screening.schema";

const prompt = `
Você é um assistente médico virtual. Receberá informações de triagem de um paciente e deve gerar:

1. Uma análise médica baseada nos sintomas e histórico fornecido.
2. Sugestões de conduta inicial ou medicamentos já administrados.
3. Uma avaliação de severidade da condição do paciente.

Os dados do paciente são:

- Sintomas: {screening.symptoms.join(', ')}
- Medicamentos em uso: {screening.medications.join(', ')}
- Idade do paciente: {screening.patient.age}

Instruções para a resposta:

- A análise médica deve ser clara e objetiva.
- No final, inclua explicitamente a severidade da seguinte forma:
  
  **Severidade:** LOW | MEDIUM | HIGH

Não adicione comentários fora desse formato. Retorne **somente texto em formato claro**, para que seja fácil extrair a severidade automaticamente.

Informações:
`;

export function handleGeneratePrompt(data: CreateScreeningSchema) {
  return `
  ${prompt}
    - Sintomas registrados pelo paciente: ${data.symptoms?.join(', ')}
    - Medicações utilizadas pelo paciente: ${data.medications?.join(', ')}
    - Idade do paciente: ${data.patient?.age}
    .`;
}


export const extractSeverity = (text?: string): 'LOW' | 'MEDIUM' | 'HIGH' | null => {
  if (!text) return null;

  const match = text.match(/\**Severidade:\**\s*(LOW|MEDIUM|HIGH)/i);

  return match ? match[1].toUpperCase() as 'LOW' | 'MEDIUM' | 'HIGH' : null;
}
