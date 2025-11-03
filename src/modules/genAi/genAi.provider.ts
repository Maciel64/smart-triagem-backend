import { InferenceClient } from "@huggingface/inference";

export class GenAiProvider {
  private client: InferenceClient;

  constructor() {
    const token = process.env.GENAI_API_TOKEN;
    this.client = new InferenceClient(token);
  }

  async generate(content: string) {
    const out = await this.client.chatCompletion({
      model: "meta-llama/Llama-3.1-8B-Instruct",
      messages: [{ role: "user", content }],
      max_tokens: 512,
    });

    return out.choices?.[0]?.message?.content;
  }
}
