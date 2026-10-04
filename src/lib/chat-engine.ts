import type { ChatMessage, ChatMode } from "./chat-types";
import { createId } from "./chat-types";
import { getSystemPrompt } from "./prompts";

export async function generateReply(
  mode: ChatMode,
  userText: string,
  history: ChatMessage[],
): Promise<ChatMessage> {
  const apiKey = import.meta.env["VITE_AIMLAPI_KEY"];
  const model = import.meta.env["VITE_AIMLAPI_MODEL"] || "gpt-4o-mini";
  const baseUrl = import.meta.env["VITE_AIMLAPI_BASE_URL"] || "https://api.aimlapi.com";

  if (!apiKey) {
    return {
      id: createId(),
      role: "assistant",
      text: "API key is not configured. Please add VITE_AIMLAPI_KEY to your .env file to enable the AI provider.",
      createdAt: Date.now(),
    };
  }

  const systemPrompt = getSystemPrompt(mode);

  const messages = [
    { role: "developer", content: systemPrompt },
    ...history.map((m) => ({
      role: m.role,
      content: m.text,
    })),
  ];

  try {
    const response = await fetch(`${baseUrl}/chat/completions`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model,
        messages,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error("AIML API Error Response:", errorText);
      throw new Error(`API error: ${response.status} - ${errorText}`);
    }

    const data = await response.json();
    const text = data.choices[0]?.message?.content || "No response generated.";

    return {
      id: createId(),
      role: "assistant",
      text,
      createdAt: Date.now(),
    };
  } catch (error) {
    console.error("LLM Error:", error);
    return {
      id: createId(),
      role: "assistant",
      text: "An error occurred while connecting to the AI provider.",
      createdAt: Date.now(),
    };
  }
}
