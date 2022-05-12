import { MODELS } from "../constants";
import { DataBody } from "../interfaces";

const sendPrompt = async (data: DataBody, modelIdx: number) => {
  const URL = `https://api.openai.com/v1/engines/${MODELS[modelIdx]}/completions`;
  if (!ApiClient.headers.has("Content-Type"))
    ApiClient.setHeader("Content-Type", "application/json");
  if (!ApiClient.headers.has("Authorization"))
    ApiClient.setHeader(
      "Authorization",
      `Bearer ${process.env.REACT_APP_OPENAI_SECRET}`
    );

  return ApiClient.sendPrompt(URL, data);
};

class ApiClient {
  static headers = new Headers();

  static sendPrompt(url: string, data: DataBody) {
    return fetch(url, {
      method: "POST",
      headers: ApiClient.headers,
      body: JSON.stringify(data),
    }).then((res) => res.json());
  }

  static setHeader(headerKey: string, headerValue: string) {
    ApiClient.headers.append(headerKey, headerValue);
  }
}

export { sendPrompt };
