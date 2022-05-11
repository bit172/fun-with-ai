export interface DataBody {
  prompt: string;
  temperature: number;
  max_tokens: number;
  top_p: number;
  frequency_penalty: number;
  presence_penalty: number;
}

export interface Choice {
  text: string;
  index: number;
  logprobs?: any;
  finish_reason: string;
}

export interface APIResponse {
  id: string;
  object: string;
  created: number;
  model: string;
  choices: Choice[];
}

export interface AIResponse {
  prompt: string;
  response: string;
}
